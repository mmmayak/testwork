import * as actionTypes from '../actionTypes/actionTypes';
import axios from 'axios';
import config from '../../helpers/config';

export const getComments = (id) => {
  return dispatch => {
    dispatch(getCommentsStart());
    axios.get(`${config.url}/api/reviews/${id}`)
    .then(response => {
      dispatch(getCommentsSuccess(response.data))
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export const getCommentsStart = () => {
  return {
    type: actionTypes.GET_COMMENTS_START
  }
}

export const getCommentsSuccess = (data) => {
  return {
    type: actionTypes.GET_COMMENTS_SUCCESS,
    payload: data
  }
}