import { combineReducers } from 'redux';
import products from '../products/products';
import comments from '../comments/comments';
import signup from '../signup/signup';
import signin from '../signin/signin';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  products,
  comments,
  form: formReducer,
  signup,
  signin
})