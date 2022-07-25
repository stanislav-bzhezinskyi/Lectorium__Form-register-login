'use script'

const signInLink = document.getElementById('sign-in-link');
const signUpLink = document.getElementById('sign-up-link');
const form = document.querySelector('.form');

signUpLink.addEventListener('click', (event) => {
    event.preventDefault();
    signInLink.classList.value = 'form__link';
    signUpLink.classList.value = 'form__link active-link';
})

signInLink.addEventListener('click', (event) => {
    event.preventDefault();
    signUpLink.classList.value = 'form__link';
    signInLink.classList.value = 'form__link active-link';
})

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    console.log(
        Object.fromEntries(data.entries())
    );
})
