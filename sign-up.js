'use script'

const form = document.querySelector('.form');

const username = form.username;
const age = form.age;
const email = form.email;
const pass = form.password;
const confPass = form.confirm_password;
const usernameAlertMessage = username.nextElementSibling;
const ageAlertMessage = age.nextElementSibling;
const emailAlertMessage = email.nextElementSibling;
const passwordAlertMessage = pass.nextElementSibling;
const confirmPasswordAlertMessage = confPass.nextElementSibling;

form.btn.setAttribute('disabled', '');

function usernameInput(value) {
  value ? (
    username.setAttribute('data-veryfied', ''),
    usernameAlertMessage.removeAttribute('hidden'),
    usernameAlertMessage.innerHTML = 'Name veryfied',
    usernameAlertMessage.className = 'alert--green'
  ) : (
    username.removeAttribute('data-veryfied'),
    usernameAlertMessage.removeAttribute('hidden'),
    usernameAlertMessage.innerHTML = 'Username cannot be empty',
    usernameAlertMessage.className = 'alert'
  )
}

function ageInput(value) {
  value < 15 ? (
    ageAlertMessage.innerHTML = 'You are to young',
    ageAlertMessage.className = 'alert',
    ageAlertMessage.removeAttribute('hidden'),
    age.removeAttribute('data-veryfied')
  ) : null;
  
  (value >= 15 && value < 110) ? (
    age.setAttribute('data-veryfied', ''),
    ageAlertMessage.removeAttribute('hidden'),
    ageAlertMessage.className = 'alert--green',
    ageAlertMessage.innerHTML = 'Age veryfied'
  ) : null;
  
  value > 110 ? (
    age.setAttribute('data-veryfied', ''),
    ageAlertMessage.removeAttribute('hidden'),
    ageAlertMessage.innerHTML = 'Hello highlander!',
    ageAlertMessage.className = 'alert--green'
  ) : null;

  !value ? (
    ageAlertMessage.className = 'alert',
    ageAlertMessage.innerHTML = 'Use only numbers',
    ageAlertMessage.removeAttribute('hidden')
  ) : null;
}

function emailInput(value) {
  const mailValueCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  value === '' ? (
    email.removeAttribute('data-veryfied'),
    emailAlertMessage.removeAttribute('hidden'),
    emailAlertMessage.innerHTML = 'Enter your mail'
  ) : null;

  (value !== '' && mailValueCheck.test(value)) ? (
    email.setAttribute('data-veryfied', ''),
    emailAlertMessage.innerHTML = 'Your email is valid',
    emailAlertMessage.className = 'alert--green',
    emailAlertMessage.removeAttribute('hidden')
  ) : null;

  value !== '' && !mailValueCheck.test(value) ? (
    email.removeAttribute('data-veryfied'),
    emailAlertMessage.innerHTML = 'Your email is invalid',
    emailAlertMessage.className = 'alert',
    emailAlertMessage.removeAttribute('hidden')
  ) : null;
}

function passwordInput(value) {
  value === confPass.value ? (
    confPass.setAttribute('data-veryfied', ''),
    pass.setAttribute('data-veryfied', ''),
    confirmPasswordAlertMessage.className = 'alert--green',
    confirmPasswordAlertMessage.innerHTML = 'Your password veryfied',
    confirmPasswordAlertMessage.removeAttribute('hidden')
  ) : null;

  (value.length < 8 || value.length > 16) ? (
    pass.removeAttribute('data-veryfied'),
    passwordAlertMessage.removeAttribute('hidden'),
    passwordAlertMessage.innerHTML = 'Your password is not correct length',
    passwordAlertMessage.className = 'alert'
  ) : null;

  value === '' ? (
    pass.removeAttribute('data-veryfied'),
    confPass.value = '',
    passwordAlertMessage.className = 'alert',
    passwordAlertMessage.innerHTML = 'Create your password',
    confirmPasswordAlertMessage.innerHTML = 'Confirm your password',
    confirmPasswordAlertMessage.removeAttribute('hidden'),
    confPass.removeAttribute('disabled'),
    confirmPasswordAlertMessage.className = 'alert',
    passwordAlertMessage.removeAttribute('hidden')
  ) : null;

  (value !== '' && value.length >= 8 && value.length <= 16) ? (
    pass.setAttribute('data-veryfied', ''),
    confPass.removeAttribute('disabled'),
    passwordAlertMessage.setAttribute('hidden', true)
  ) : null;

  (value === confPass.value && value >= 8 && value <= 16) ? (
    confPass.setAttribute('data-veryfied', ''),
    confirmPasswordAlertMessage.className = 'alert--green',
    confirmPasswordAlertMessage.innerHTML = 'Your password veryfied',
    confirmPasswordAlertMessage.removeAttribute('hidden')
  ) : null;

  (value !== confPass.value) ? (
    confirmPasswordAlertMessage.className = 'alert',
    confirmPasswordAlertMessage.innerHTML = 'Your password is not match',
    confirmPasswordAlertMessage.removeAttribute('hidden'),
    confPass.removeAttribute('data-veryfied')
  ) : null;
}

function confPassInput(value) {
  (value === '') ? (
    confirmPasswordAlertMessage.className = 'alert',
    confirmPasswordAlertMessage.innerHTML = 'Confirm your password',
    confirmPasswordAlertMessage.removeAttribute('hidden'),
    confPass.removeAttribute('data-veryfied')
  ) : null;

  (value !== pass.value && pass.hasAttribute('data-veryfied')) ? (
    confirmPasswordAlertMessage.className = 'alert',
    confirmPasswordAlertMessage.innerHTML = 'Your password is not match',
    confirmPasswordAlertMessage.removeAttribute('hidden'),
    confPass.removeAttribute('data-veryfied')
  ) : null;

  (value === pass.value) ? (
    confPass.setAttribute('data-veryfied', ''),
    confirmPasswordAlertMessage.className = 'alert--green',
    confirmPasswordAlertMessage.innerHTML = 'Your password veryfied',
    confirmPasswordAlertMessage.removeAttribute('hidden')
  ) : null;

  (!pass.hasAttribute('data-veryfied')) ? (
    confirmPasswordAlertMessage.className = 'alert',
    confirmPasswordAlertMessage.removeAttribute('hidden'),
    confirmPasswordAlertMessage.innerHTML = 'Confirm your password',
    confPass.removeAttribute('data-veryfied')
  ) : null;
}

form.addEventListener('focusin', (event) => {
  const item = event.target;
  
  item.id === 'username' ? usernameAlertMessage.setAttribute('hidden', true) : null;
  item.id === 'age' ? ageAlertMessage.setAttribute('hidden', true) : null;
  item.id === 'email' ? emailAlertMessage.setAttribute('hidden', true) : null;
  item.id === 'password' ? (
    passwordAlertMessage.className = 'alert--green long-alert',
    passwordAlertMessage.innerHTML = 'Your password length min 8 - 16 symbols',
    confirmPasswordAlertMessage.innerHTML = 'Confirm your password',
    confirmPasswordAlertMessage.className = 'alert'
  ) : null;

  item.id === 'confirm_password' ? (
    pass.value === '' ? (
      confPass.setAttribute('disabled', true),
      confirmPasswordAlertMessage.innerHTML = 'First create your password'
    ) : confirmPasswordAlertMessage.setAttribute('hidden', true)
  ) : null;
});

form.addEventListener('focusout', (event) => {
  const item = event.target;

  item.id === 'username' ? usernameInput(item.value) : null;
  item.id === 'age' ? ageInput(item.value) : null;
  item.id === 'email' ? emailInput(item.value) : null;
  item.id === 'password' ? passwordInput(item.value) : null;
  item.id === 'confirm_password' ? confPassInput(item.value) : null;

  let count = 0;

  [...form].map(item => {
    item.hasAttribute('data-veryfied') ? count++ : count--;
  })

  count === 4 
    ? document.getElementById('btn').removeAttribute('disabled')
    : document.getElementById('btn').setAttribute('disabled', '');
});


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(form);

  console.log(
    Object.fromEntries(data.entries())
  );

  alert('Form sent');
});
