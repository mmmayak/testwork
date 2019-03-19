import * as actionTypes from '../../actions/actionTypes/actionTypes';

const initialState = {
  loading: false,
  error: null,
  signup: null
}

const signup = ( state = initialState, action ) => {
  switch(action.type){
    case actionTypes.SIGNUP_START:
      return {
        ...state,
        loading: true,
        error: null,
        signup: null
      }
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state, 
        loading: false,
        error: null,
        signup: action.payload
      }
    case actionTypes.SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        signup: null
      }
    default:
      return state
  }
}

export default signup;