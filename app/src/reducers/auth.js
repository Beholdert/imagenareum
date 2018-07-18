import { AUTH_USER, FETCH_USER } from '../actions/types';

const initialState = {
  auth: null,
  user: null,
  isFetching: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, auth: true, user: action.payload, isFetching: false };
    case FETCH_USER:
      return { ...state, isFetching: true };
    default:
      return state;
  }
};
