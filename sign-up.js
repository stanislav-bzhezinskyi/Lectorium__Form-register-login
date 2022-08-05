'use script'

const form = document.querySelector('.form');

const usernameAlertMessage = document.querySelector('.username-alert');
const ageAlertMessage = document.querySelector('.age-alert');
const emailAlertMessage = document.querySelector('.email-alert');
const passwordAlertMessage = document.querySelector('.password-alert');
const confirmPasswordAlertMessage = document.querySelector('.confirm_password-alert');
const username = document.querySelector('#username');
const age = document.querySelector('#age');
const email = document.querySelector('#email');
const pass = document.querySelector('#password');
const confPass = document.querySelector('#confirm_password');

document.getElementById('btn').setAttribute('disabled', '');

form.addEventListener('focusin', (event) => {
  const item = event.target;
  
  if (item === document.getElementById('username')) {
    usernameAlertMessage.setAttribute('hidden', true);
  }

  if (item === document.getElementById('age')) {
    ageAlertMessage.setAttribute('hidden', true);
  }

  if (item === document.getElementById('email')) {
    emailAlertMessage.setAttribute('hidden', true);
  }

  if (item === document.getElementById('password')) {
    passwordAlertMessage.className = 'alert--green';
    passwordAlertMessage.innerHTML = 'Your password length min 8 - 16 symbols';
    confirmPasswordAlertMessage.innerHTML = 'Confirm your password';
  }

  if (item === document.getElementById('confirm_password')) {
    if (pass.value === '') {
      confPass.setAttribute('disabled', true);
    }
    
    if (pass.value !== '') {
      confirmPasswordAlertMessage.setAttribute('hidden', true);
    }

    confirmPasswordAlertMessage.innerHTML = 'First create your password';
  }
});

form.addEventListener('focusout', (event) => {
  const item = event.target;

  if (item === document.getElementById('username')) {
      if (item.value === '') {
        username.removeAttribute('veryfied')
        usernameAlertMessage.removeAttribute('hidden');
      }

      if (item.value !== '') {
        username.setAttribute('veryfied', '')
      }
  }

  if (item === document.getElementById('age')) {
    if (item.value < 15) {
      ageAlertMessage.innerHTML = 'You are to young'
      ageAlertMessage.removeAttribute('hidden');
      age.removeAttribute('veryfied')
    }

    if (item.value >= 15) {
      age.setAttribute('veryfied', '')
    }

    if (item.value === '') {
      ageAlertMessage.innerHTML = 'Use only numbers'
      ageAlertMessage.removeAttribute('hidden');
    }
  }

  if (item === document.getElementById('email')) {
    if (item.value === '') {
      email.removeAttribute('veryfied');
      emailAlertMessage.removeAttribute('hidden');
    }

    if (item.value !== '' && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(item.value)) {
      email.setAttribute('veryfied', '');
      emailAlertMessage.innerHTML = 'Your email is valid';
      emailAlertMessage.className = 'alert--green';
      emailAlertMessage.removeAttribute('hidden');
    }

    if (item.value !== '' && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(item.value)) {
      email.removeAttribute('veryfied');
      emailAlertMessage.innerHTML = 'Your email is invalid';
      emailAlertMessage.className = 'alert';
      emailAlertMessage.removeAttribute('hidden');
    }
  }

  if (item === document.getElementById('password')) {
    if (item.value === confPass.value) {
      confPass.setAttribute('veryfied', '');
      pass.setAttribute('veryfied', '');
      confirmPasswordAlertMessage.className = 'alert--green';
      confirmPasswordAlertMessage.innerHTML = 'Your password veryfied';
      confirmPasswordAlertMessage.removeAttribute('hidden');
    }

    if (item.value.length < 8 || item.value.length > 16) {
      pass.removeAttribute('veryfied');
      passwordAlertMessage.removeAttribute('hidden');
      passwordAlertMessage.innerHTML = 'Your password is not correct length';
      passwordAlertMessage.className = 'alert';
    }

    if (item.value === '') {
      pass.removeAttribute('veryfied');
      confPass.value = '';
      passwordAlertMessage.className = 'alert';
      passwordAlertMessage.innerHTML = 'Create your password';
      confirmPasswordAlertMessage.innerHTML = 'Confirm your password';
      confirmPasswordAlertMessage.removeAttribute('hidden');
      passwordAlertMessage.removeAttribute('hidden');
    }

    if (item.value !== '' && item.value.length >= 8 && item.value.length <= 16) {
      pass.setAttribute('veryfied', '');

      confPass.removeAttribute('disabled');
      passwordAlertMessage.setAttribute('hidden', true);
    }

    if (item.value === confPass.value && item.value >= 8 && item.value <= 16) {
      confPass.setAttribute('veryfied', '')
      confirmPasswordAlertMessage.className = 'alert--green';
      confirmPasswordAlertMessage.innerHTML = 'Your password veryfied';
      confirmPasswordAlertMessage.removeAttribute('hidden');
    }

    if (item.value !== confPass.value) {
      confirmPasswordAlertMessage.className = 'alert';
      confirmPasswordAlertMessage.innerHTML = 'Your password is not match';
      confirmPasswordAlertMessage.removeAttribute('hidden');
      confPass.removeAttribute('veryfied')
    }
  }

  if (item === document.getElementById('confirm_password')) {
    if (item.value === '') {
      confirmPasswordAlertMessage.className = 'alert';
      confirmPasswordAlertMessage.innerHTML = 'Confirm your password';
      confirmPasswordAlertMessage.removeAttribute('hidden');
      confPass.removeAttribute('veryfied')
    }

    if (item.value !== pass.value && pass.hasAttribute('veryfied')) {
      confirmPasswordAlertMessage.className = 'alert';
      confirmPasswordAlertMessage.innerHTML = 'Your password is not match';
      confirmPasswordAlertMessage.removeAttribute('hidden');
      confPass.removeAttribute('veryfied')
    }

    if (item.value === pass.value) {
      confPass.setAttribute('veryfied', '')
      confirmPasswordAlertMessage.className = 'alert--green';
      confirmPasswordAlertMessage.innerHTML = 'Your password veryfied';
      confirmPasswordAlertMessage.removeAttribute('hidden');
    }

    if (!pass.hasAttribute('veryfied')) {
      confirmPasswordAlertMessage.className = 'alert';
      confirmPasswordAlertMessage.removeAttribute('hidden');
      confirmPasswordAlertMessage.innerHTML = 'Confirm your password';
      confPass.removeAttribute('veryfied')
    }
  }

  if (
      username.hasAttribute('veryfied') &&
      age.hasAttribute('veryfied') &&
      email.hasAttribute('veryfied') &&
      pass.hasAttribute('veryfied') &&
      confPass.hasAttribute('veryfied')
    )
    {
      document.getElementById('btn').removeAttribute('disabled');
    }

  if (
      !username.hasAttribute('veryfied') ||
      !age.hasAttribute('veryfied') ||
      !email.hasAttribute('veryfied') ||
      !pass.hasAttribute('veryfied') ||
      !confPass.hasAttribute('veryfied')
    )
    {
      document.getElementById('btn').setAttribute('disabled', '');
    }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(form);
  console.log(
      Object.fromEntries(data.entries())
  );
  alert('Form sent');
});
