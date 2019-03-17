import { combineReducers } from 'redux';
import products from '../products/products';
import comments from '../comments/comments';

export default combineReducers({
  products,
  comments
})