// const wrapper = document.querySelector('#wrapper');
// const signUpLink = document.querySelector ('#signUp-link');
// const signInLink = document.querySelector ('#signIn-link');

const togglePassword = document.querySelector('#troyaPassword');
const password = document.querySelector('#password');
troyaPassword.addEventListener('click', function(f) {
   
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
});
createUsersKey();
function createUsersKey() {
    if (localStorage.getItem('users') == null) {
        localStorage.setItem('users', '[]')
    }
}
const registerBtn = document.getElementById("register");
        registerBtn.addEventListener('click', ()=>{
            
            const username = document.getElementById('username');
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            let obj = {
                username : username.value,
                email: email.value,
                password: password.value
            }
            createUsersKey();
            let users = JSON.parse(localStorage.getItem('users'));
            users.push(obj);
            localStorage.setItem('users',JSON.stringify(users))
        })




// signInLink.addEventListener('click', () => {
//     wrapper.classList.add('animate-signIn');
//     wrapper.classList.remove('animate-signUp');
// });






// const togglePassword = document.querySelector('#togglePassword');
// const password = document.querySelector('#password');

// togglePassword.addEventListener('click', function (e) {
//     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//     password.setAttribute('type', type);
//     this.classList.toggle('fa-eye-slash');
// });