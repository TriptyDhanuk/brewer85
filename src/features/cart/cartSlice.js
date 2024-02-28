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
      const itemToAdd = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === itemToAdd.id
      );

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += itemToAdd.quantity;
      } else {
        state.items.push(itemToAdd);
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
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === itemToAdd.id
      );

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += itemToAdd.quantity;
      } else {
        state.items.push(itemToAdd);
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
  state.cart.savedForLater.length;

export default cartSlice.reducer;
