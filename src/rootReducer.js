// rootReducer.js

import { combineReducers } from 'redux';
import cartReducer from './features/cart/cartSlice';
import wishlistReducer from './features/cart/wishlistSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer, 
});

export default rootReducer;
