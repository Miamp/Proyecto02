const users = [
    {
        username: 'Milly',
        email: 'mil@mil.com',
        password: '123',
        saldo: 550
    },
    {
        username: 'Jack',
        email: 'jackjunior@jack.com',
        password: '123',
        saldo: 300
    },
    {
        username: 'Nadia',
        email: 'nadia@nadia.com',
        password: '123',
        saldo: 150
    }
]

function login() {
    let name = document.getElementById('username').value;
    let user = document.getElementById('email').value;
    let pass = document.getElementById('password').value;

    if (user === 'mil@mil.com' && pass === '123') {
        sessionStorage.setItem('user', user);
        window.location.href = "info.html";


    } else {
        alert('error');
    }
}

document.addEventListener('DOMContentLoaded', function () {
document.getElementById('welcome').innerText = `Hola ${sessionStorage.getItem('username')}`;
});