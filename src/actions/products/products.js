import * as actionTypes from '../actionTypes/actionTypes';
import axios from 'axios';
import config from '../../helpers/config';

export const getProducts = () => {
  return dispatch => {
    dispatch(getProductsStart());
    axios.get(`${config.url}/api/products/`)
    .then(response => {
      dispatch(getProductsSuccess(response.data))
    })
  }
}

export const getProductsStart = () => {
  return {
    type: actionTypes.GET_PRODUCTS_START
  }
}

export const getProductsSuccess = (data) => {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: data
  }
}

export const getProductsFail = () => {
  return {
    type: actionTypes.GET_PRODUCTS_FAIL
  }
}