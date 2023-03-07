/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
import axios from 'axios';
import { showAlert } from './alert';

export const login = async (email, password) => {
  try {
    const res = await axios({
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      method: 'POST',
      url: 'http://127.0.0.1:3088/api/v1/users/login',
      data: {
        email,
        password,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
    console.log(error);
  }
};
