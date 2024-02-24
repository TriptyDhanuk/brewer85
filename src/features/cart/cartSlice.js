// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export const selectCartTotalItems = (state) => state.cart.items.length; // Selector to get total items in the cart

export default cartSlice.reducer;
