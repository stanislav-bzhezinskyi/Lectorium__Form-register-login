'use strict'

const form = document.querySelector('form');

const usernameChecking = (incomeValue, alert) => {
  alert.removeAttribute('hidden');

  if (incomeValue) {
    alert.innerHTML = 'Username valid';
    alertGreen(alert);
  } else {
    alert.innerHTML = 'Username cannot be empty';
    alertRed(alert);
  };

  confirmButton();
}

const ageChecking = (incomeValue, alert) => {
  alert.removeAttribute('hidden');
  
  if (incomeValue === '') {
    alert.innerHTML = 'Enter your age';
    alertRed(alert);
  } else if (incomeValue < 15) {
    alert.innerHTML = 'You are to young';
    alertRed(alert);
  } else {
    alert.innerHTML = 'Your age valid';
    alertGreen(alert);
  };

  confirmButton();
}

const emailChecking = (incomeValue, alert) => {
  const mailValueCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  alert.removeAttribute('hidden');

  if (incomeValue && mailValueCheck.test(incomeValue)) {
    alert.innerHTML = 'Your email is valid'
    alertGreen(alert);
  } else if (incomeValue && !mailValueCheck.test(incomeValue)) {
    alert.innerHTML = 'Your email is NOT valid';
    alertRed(alert);
  } else {
    alert.innerHTML = 'Enter your e-mail';
    alertRed(alert);
  };

  confirmButton();
}

const passwordChecking = (passwordValue, alert) => {
  alert.removeAttribute('hidden');

  if (!passwordValue){
    alert.innerHTML = 'Create your password';
    alertRed(alert);
  } else if (passwordValue.length < 8 || passwordValue.length > 16) {
    alert.innerHTML = 'Your password is not correct length';
    alertRed(alert);
  } else if (passwordValue.length >= 8 && passwordValue.length <= 16) {
    alert.innerHTML = 'Confirm your password';
    alertGreen(alert);
  };

  confirmButton();
}

const confirmPassCheck = (incomevalue, alert) => {
  const password = form.querySelector('#password');
  const passwordAlert = form.querySelector('#password_alert');
  
  alert.removeAttribute('hidden');
  if (!incomevalue) {
    alertRed(alert);
    verifiedCancel(alert);
    alert.innerHTML = 'Confirm your password';
  } else if (incomevalue === password.value && passwordAlert.hasAttribute('data-verified')) {
    alertGreen(alert);
    alert.innerHTML ='Your password veryfied';
    alert.setAttribute('data-verified', true);
  } else {
    alertRed(alert);
    verifiedCancel(alert);
    alert.innerHTML = 'Your password is not match'
  };

  confirmButton();
}

const verifiedCancel = alert => alert.removeAttribute('data-verified');

const verifiedSet = alert => alert.setAttribute('data-verified', true);

const alertCreator = (targEl, incomeValue) => {
  const alert = form.querySelector(`#${targEl.id}_alert`);

  targEl.id === 'username' && usernameChecking(incomeValue, alert);
  targEl.id === 'age' && ageChecking(incomeValue, alert);
  targEl.id === 'email' && emailChecking(incomeValue, alert);
  targEl.id === 'password' && passwordChecking(incomeValue, alert);
  targEl.id === 'confirm_password' && confirmPassCheck(incomeValue, alert);
}

const alertGreen = alert => {
  alert.className = `${alert.id} alert alert--green`;
  verifiedSet(alert);
}

const alertRed = (alert) => {
  alert.className = `${alert.id} alert`;
  verifiedCancel(alert);
}

const getInFocus = (targEl) => {
  const alert = form.querySelector(`#${targEl.id}_alert`);
  
  if (alert === null) {
    return;
  }

  alert.setAttribute('hidden', '');
}

const getInBlur = (targEl) => {
  targEl.value ? alertCreator(targEl, targEl.value) : alertCreator(targEl, targEl.value);
}

const confirmButton = () => {
  const button = document.getElementById('btn');
  const verifiedElements = document.querySelectorAll('.alert');
  let count = 0;

  [...verifiedElements].map(item => item.hasAttribute('data-verified') ? count++ : count--);

  count === 5 
    ? button.removeAttribute('disabled')
    : button.setAttribute('disabled', '');
}

form.addEventListener('focusin', (e) => getInFocus(e.target));

form.addEventListener('keyup', (e) => getInBlur(e.target));

form.addEventListener('focusout', (e) => getInBlur(e.target));

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(form);

  console.log(
    Object.fromEntries(data.entries())
  );

  alert('Form sent');
})
