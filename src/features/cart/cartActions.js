// cartActions.js
import { ADD_TO_CART, UPDATE_CART, SAVE_FOR_LATER } from "./cartActionTypes"; 

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const updateCart = (updatedCartItems) => ({
  type: UPDATE_CART,
  payload: updatedCartItems,
});

export const saveForLater = (item) => ({
  type: SAVE_FOR_LATER,
  payload: item,
});
