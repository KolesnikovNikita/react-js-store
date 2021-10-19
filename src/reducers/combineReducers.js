import user from './user';
import products from './products';
import cart from './cart';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  user, products, cart
});

export default rootReducer;