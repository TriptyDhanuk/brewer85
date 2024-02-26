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
      state.items.push(action.payload);
    },
    updateCart: (state, action) => {
      state.items = action.payload;
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== itemIdToRemove);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, updateCart, removeFromCart, clearCart } = cartSlice.actions;

// Selector to retrieve cart items
export const selectCartItems = (state) => state.cart.items;

export const selectCartTotalItems = (state) => state.cart.items.length;

export default cartSlice.reducer;
