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
  },
});

export const { addToCart, updateCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectCartTotalItems = (state) => state.cart.items.length;

export default cartSlice.reducer;
