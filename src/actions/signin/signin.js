import * as actionTypes from '../actionTypes/actionTypes';
import axios from 'axios';
import config from '../../helpers/config';
import setAuthToken from '../../helpers/setAuthToken';

export const signIn = (values, history) => {
  return dispatch => {
    dispatch(signInStart());
    axios.post(`${config.url}api/login/`, values)
    .then(response => {
      if(response.data.success){
        localStorage.setItem('token', response.data.token);
        setAuthToken(response.data.token);
        dispatch(signInSuccess(response.data));
        history.push('/');
      }else {
        dispatch(signInFail(response.data.message));
      }
     
    })
    .catch(err => {
    })
  }
}

export const signInStart = () => {
  return {
    type: actionTypes.SIGNIN_START
  }
}

export const signInSuccess = (data) => {
  return {
    type: actionTypes.SIGNIN_SUCCESS,
    payload: data
  }
}

export const signInFail = (message) => {
  return {
    type: actionTypes.SIGNIN_FAIL,
    payload: message
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(logoutSuccess())
  }
}

export const logoutSuccess = () => {
  localStorage.removeItem('token');
  return {
    type: actionTypes.LOGOUT_SUCCESS
  }
}

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if(token) {
      dispatch(signInSuccess(token));
      setAuthToken(token);
    }
  }
}