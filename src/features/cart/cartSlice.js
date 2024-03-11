import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  savedForLater: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    updateCart: (state, action) => {
      state.items = action.payload;
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemIdToRemove);
    },
    clearCart: (state) => {
      state.items = [];
    },

    saveForLater: (state, action) => {
      const itemToAdd = action.payload;
      const existingItemIndex = state.savedForLater.findIndex(
        (item) => item.id === itemToAdd.id
      );

      if (existingItemIndex !== -1) {
        state.savedForLater[existingItemIndex].quantity += itemToAdd.quantity;
      } else {
        state.savedForLater.push(itemToAdd);
      }
    },
    removeFromSavedForLater: (state, action) => {
      const itemIdToRemove = action.payload;
      state.savedForLater = state.savedForLater.filter(
        (item) => item.id !== itemIdToRemove
      );
    },
  },
});

export const {
  addToCart,
  updateCart,
  removeFromCart,
  clearCart,
  saveForLater,
  removeFromSavedForLater,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectSavedForLaterItems = (state) => state.cart.savedForLater;
export const selectCartTotalItems = (state) => state.cart.items.length;
export const selectSavedForLaterTotalItems = (state) =>
  state.cart.savedForLater;

export default cartSlice.reducer;
