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
    let saldoActual = users[0]
    let name = document.getElementById('username').value;
    let user = document.getElementById('email').value;
    let pass = document.getElementById('password').value;

    if (user === 'mil@mil.com' && pass === '123') {
        window.location.href = "info.html";
        let user1 = users[0];
        document.getElementById('cont-txt').innerText = `Tu saldo actual es: ${saldoActual}`

    } else {
        alert('error');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('welcome').innerText = `Hola`;

});