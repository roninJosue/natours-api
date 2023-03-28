import '@babel/polyfill';
import { login, logout } from './login';
import { updateSettings } from './updateSettings';
import { bookTour } from './stripe';

const loginForm = document.querySelector('.form--login');
const updateForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');
const logOutBtn = document.querySelector('.nav__el--logout');
const bookBtn = document.getElementById('book-tour');

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
    const formData = new FormData();
    formData.append('name', document.getElementById('name').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('photo', document.getElementById('photo').files[0]);
    updateSettings(formData, 'data');
  });
}
if (userPasswordForm) {
  userPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';
    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      'password'
    );

    document.querySelector('.btn--save-password').textContent = 'Save password';
    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
  });
}

if (logOutBtn) logOutBtn.addEventListener('click', logout);

if (bookBtn) {
  bookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.textContent = 'Processing...';
    const { tourId } = e.target.dataset;
    console.log(`tourId: ${tourId}`);
    bookTour(tourId);
  });
}
