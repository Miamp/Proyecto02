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

    let user = document.getElementById('email').value;
    let pass = document.getElementById('password').value;


    ////findindex realizar una arrow function y de ahi sacar el objeto, y con session storage conseguir los datos
    if (index = users.findIndex(element => element === user)) {
        window.location.href = "info.html";
    } else {
        alert('Error de usuario')
    }
}

/* if (user === 'mil@mil.com' && pass === '123') {
     window.location.href = "info.html";
     //let user1 = users[0];
     document.getElementById('cont-txt').innerText = `Tu saldo actual es: ${saldoActual}`

 } else {
     alert('error');
 }
}*/

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('welcome').innerText = `Hola`

});