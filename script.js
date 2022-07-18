'use script'

const SignInLink = document.querySelector('.sign-in-link');
const SignUpLink = document.querySelector('.sign-up-link');

SignInLink.setAttribute('style', 'border-bottom: 2px solid yellow');
SignUpLink.setAttribute('style', 'color: #9895ab');

SignInLink.addEventListener('click', (event) => {
    event.preventDefault();
    SignInLink.setAttribute('style', 'border-bottom: 2px solid yellow; color: white');
    SignUpLink.setAttribute('style', 'color: #9895ab');
})

SignUpLink.addEventListener('click', (event) => {
    event.preventDefault();
    SignUpLink.setAttribute('style', 'border-bottom: 2px solid yellow; color: white');
    SignInLink.setAttribute('style', 'color: #9895ab');
})

const checkboxForm = document.querySelector('.checkbox-form');
const checkboxCover = document.querySelector('.checkbox-cover');
const checkbox = document.getElementById('checkbox');
const checkboxLabel = document.querySelector('.checkbox-label');

checkboxForm.addEventListener('click', () => {
    if (!checkboxCover.hidden) {
        return (
            checkboxCover.setAttribute('hidden', true),
            checkbox.checked = true
        )
    }

    if (checkboxCover.hidden) {
        return (
            checkboxCover.removeAttribute('hidden'),
            checkbox.checked = false
        )
    }
})

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const data = new FormData(form);

    console.log(
        Object.fromEntries(data.entries())
    );
})
