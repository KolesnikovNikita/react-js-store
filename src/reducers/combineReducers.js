import user from './user';
import products from './products';
import cart from './cart';
import { combineReducers } from 'redux';
import basketReducer from './basket';


const rootReducer = combineReducers({
  user, products, cart, basketReducer
});

export default rootReducer;