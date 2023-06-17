const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector ('.signUp-link');
const signInLink = document.querySelector ('.signIn-link');


signInLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signIn');
    wrapper.classList.remove('animate-signUp');
});