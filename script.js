'use script'

const formHeader = document.getElementById('form__header-links')
const form = document.querySelector('.form');

const onLinkClick = (event) => {
  event.preventDefault();

  if (event.target.classList.contains('form__link')) {
    const links = formHeader.querySelectorAll('.form__link');

    for (let link of links) {
        link.classList.remove('active-link');
    }

    event.target.classList.add('active-link');
  }
}

formHeader.addEventListener('click', onLinkClick);

function isFilled() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const checked = document.getElementById('checkbox').checked;
 
  if (username !== '' && password !== '' && checked) {
    document.getElementById('btn').removeAttribute('disabled');
  }

  if (username === '' || password === '' || checked === false) {
    document.getElementById('btn').setAttribute('disabled', '');
  }
}
 
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    console.log(
        Object.fromEntries(data.entries())
    );
});


