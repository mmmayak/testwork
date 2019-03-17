import * as actionTypes from '../actionTypes/actionTypes';
import axios from 'axios';
import config from '../../helpers/config';
import setAuthToken from '../../helpers/setAuthToken';
import { signIn } from '../signin/signin';

export const signUp = (values, history) => {
  return dispatch => {
    dispatch(signUpStart());
    axios.post(`${config.url}/api/register/`, values)
    .then(response => {
      if(response.data.success){
        dispatch(signUpSuccess(response.data));
        history.push('/sign-in')
      }else {
        dispatch(signUpFail(response.data.success));
      }
     
    })
    .catch(err => {
    })
  }
}

export const signUpStart = () => {
  return {
    type: actionTypes.SIGNUP_START
  }
}

export const signUpSuccess = (data) => {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
    payload: data
  }
}

export const signUpFail = () => {
  return {
    type: actionTypes.SIGNUP_FAIL
  }
}