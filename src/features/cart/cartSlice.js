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
      state.items = [...state.items, action.payload];
      localStorage.setItem("cartItems", JSON.stringify(state.items)); // Save items to localStorage
    },
  },
});

export const { addToCart } = cartSlice.actions;

// Selector to retrieve cart items
export const selectCartItems = (state) => state.cart.items;

export const selectCartTotalItems = (state) => state.cart.items.length;

export default cartSlice.reducer;
