import * as actionTypes from '../../actions/actionTypes/actionTypes';

const initialState = {
  loading: false,
  error: false,
  signup: null
}

const signup = ( state = initialState, action ) => {
  switch(action.type){
    case actionTypes.SIGNUP_START:
      return {
        ...state,
        loading: true,
        error: false,
        signup: null
      }
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state, 
        loading: false,
        error: false,
        signup: action.payload
      }
    default:
      return state
  }
}

export default signup;