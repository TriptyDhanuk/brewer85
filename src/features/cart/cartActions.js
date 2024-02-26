// cartActions.js
import { ADD_TO_CART } from './cartActionTypes';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});
