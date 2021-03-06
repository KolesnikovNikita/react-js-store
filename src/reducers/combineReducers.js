import user from './user';
import products from './products';
import cart from './cart';
import favorite from './favorite';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  user, products, cart, favorite
});

export default rootReducer;