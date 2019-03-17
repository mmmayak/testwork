import * as actionTypes from '../../actions/actionTypes/actionTypes';

const initialState = {
  loading: false,
  error: null,
  isAuth: false
}

const signup = ( state = initialState, action ) => {
  switch(action.type){
    case actionTypes.SIGNIN_START:
      return {
        ...state,
        loading: true,
        error: null,
        isAuth: false,
      }
    case actionTypes.SIGNIN_SUCCESS:
      return {
        ...state, 
        loading: false,
        error: null,
        isAuth: true
      }
    case actionTypes.SIGNIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuth: false
      }
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: false
      }
    default:
      return state
  }
}

export default signup;