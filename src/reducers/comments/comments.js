import * as actionTypes from '../../actions/actionTypes/actionTypes';

const initialState = {
  loading: false,
  error: false,
  comments: null
}

const comments = ( state = initialState, action ) => {
  switch(action.type){
    case actionTypes.GET_COMMENTS_START:
      return {
        ...state,
        loading: true,
        error: false,
        comments: null
      }
    case actionTypes.GET_COMMENTS_SUCCESS:
      return {
        ...state, 
        loading: false,
        error: false,
        comments: action.payload
      }
    default:
      return state
  }
}

export default comments;