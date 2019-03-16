import * as actionTypes from '../../actions/actionTypes/actionTypes';

const initialState = {
  loading: false,
  error: false,
  products: null
}

const products = ( state = initialState, action ) => {
  switch(action.type){
    case actionTypes.GET_PRODUCTS_START:
      return {
        ...state,
        loading: true,
        error: false,
        products: null
      }
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state, 
        loading: false,
        error: false,
        products: action.payload
      }
    default:
      return state
  }
}

export default products;