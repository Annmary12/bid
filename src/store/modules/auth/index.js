import jwt from 'jsonwebtoken';

// types
import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from './types';

// helpers
import { actionResponseSuccess, actionResponseFailure } from '../../../utils/helpers/actionHelper';
import { setAuthorizationToken } from '../../../utils/Authorization';


export const Signup = (userData, type) => (dispatch, getState, http) => {
  return http.post(`/users/${type}/signup`, userData)
  .then(({ data }) => {
    const { token } = data;
    const payload = jwt.decode(token);

    console.log(payload, 'token===');
    localStorage.setItem('jwtToken', token);
    setAuthorizationToken(token);
    console.log('dispatch====');

    dispatch({type:SIGNUP_SUCCESS, payload});

  })
  .catch(error =>  console.log(error.response));
 // console.log({userData, type});
};

// users initial state
const userInitialState = {
  isAuthenticated: false,
  user: {},
  error: '',
}

/**
 * This reducers changes the user states of the application
 *
 * @param {object} [state=user]
 * @param action = userActions
 * @returns {object}
 */
export const reducer = (state = userInitialState, action) => {
  console.log(action.type, 'action type');
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return console.log(action.payload, 'payload ---') || {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };

      default:
        return state;
  }
}

export default reducer;

