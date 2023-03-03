/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
const login = async (email, password) => {
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

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  login(email, password);
});
