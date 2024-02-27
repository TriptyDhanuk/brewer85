// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
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
      const itemIdToSave = action.payload;
      const itemToSave = state.items.find((item) => item.id === itemIdToSave);
      if (itemToSave) {
        state.savedForLater.push(itemToSave);
        state.items = state.items.filter((item) => item.id !== itemIdToSave);
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

export const selectCartTotalItems = (state) => state.cart.items.length;

export default cartSlice.reducer;
