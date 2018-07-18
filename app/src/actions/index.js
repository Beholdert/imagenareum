import { AUTH_USER, FETCH_USER } from './types';

import axios from 'axios';

export const authUser = token => async dispatch => {
  try {
    dispatch({ type: FETCH_USER });

    const jwt = await axios.get(
      `http://localhost:8080/api/users/login?access_token=${token}`
    );

    localStorage.setItem('jwt', jwt.data.token);
    axios.defaults.headers.common['Authorization'] =
      'Bearer ' + localStorage.getItem('jwt');

    const user = await axios.get('http://localhost:8080/api/users/me');

    console.log(user);
    dispatch({ type: AUTH_USER, payload: user.data });
  } catch (error) {
    console.log(error);
  }
};
