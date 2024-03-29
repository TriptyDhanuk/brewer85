import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedForLater: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.savedForLater.findIndex(
        (item) => item.id === newItem.id
      );
      if (existingItemIndex !== -1) {
        state.savedForLater[existingItemIndex].quantity = newItem.quantity;
      } else {
        state.savedForLater.push(newItem);
      }
    },

    updateWishlist: (state, action) => {
      state.savedForLater = action.payload;
    },
    removeFromWishlist: (state, action) => {
      const itemIdToRemove = action.payload;
      state.savedForLater = state.savedForLater.filter(
        (item) => item.id !== itemIdToRemove
      );
    },
    clearWishlist: (state) => {
      state.savedForLater = [];
    },
  },
});

export const {
  addToWishlist,
  updateWishlist,
  removeFromWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export const selectSavedForLaterItems = (state) => state.wishlist.savedForLater;

export const selectWishlistTotalItems = (state) =>
  state.wishlist.savedForLater.length;
console.log("selectWishlistTotalItems", selectWishlistTotalItems);

export default wishlistSlice.reducer;
