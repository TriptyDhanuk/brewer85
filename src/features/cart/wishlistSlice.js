// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   savedForLater: [], // Initialize savedForLater as an empty array
// };

// export const wishlistSlice = createSlice({
//   name: "wishlist",
//   initialState,
//   reducers: {
//     addToWishlist: (state, action) => {
//       const itemToAdd = action.payload;
//       state.savedForLater.push(itemToAdd);
//     },
//     removeFromWishlist: (state, action) => {
//       const itemIdToRemove = action.payload;
//       state.savedForLater = state.savedForLater.filter(
//         (item) => item.id !== itemIdToRemove
//       );
//     },
//   },
// });

// export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

// export const selectWishlistItems = (state) => state.wishlist.savedForLater;

// export const selectWishlistTotalItems = (state) =>
//   state.wishlist.savedForLater.length;

// export default wishlistSlice.reducer;


// wishlistSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedForLater: [], // Initialize savedForLater as an empty array
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const itemToAdd = action.payload;
      state.savedForLater.push(itemToAdd);
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

export const selectWishlistTotalItems = (state) => state.wishlist.savedForLater.length;
console.log("selectWishlistTotalItems",selectWishlistTotalItems);

export default wishlistSlice.reducer;