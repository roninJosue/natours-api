import '@babel/polyfill';
import { login, logout } from './login';
import { updateData } from './updateSettings';

const loginForm = document.querySelector('.form--login');
const updateForm = document.querySelector('.form-user-data');
const logOutBtn = document.querySelector('.nav__el--logout');

if (loginForm) {
  document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}

if (updateForm) {
  document.querySelector('.form-user-data').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('UPDATE');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    updateData(name, email);
  });
}

if (logOutBtn) logOutBtn.addEventListener('click', logout);
