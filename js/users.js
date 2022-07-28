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
    //let saldoActual = users.filter(element => element === saldo)

    if (index = users.findIndex(element => element === user)) {
        sessionStorage.setItem('user', user);
        window.location.href = "info.html";
        let saldoActual = users.findIndex(saldo[user]);

        document.addEventListener('DOMContentLoaded', function () {
            document.getElementById('welcome').innerText = `Hola`
            document.getElementById('cont-txt').innerText = `Tu saldo actual es: ${saldoActual}`
        });
    }
}

/* if (user === 'mil@mil.com' && pass === '123') {
     window.location.href = "info.html";
     //let user1 = users[0];
     

 } else {
     alert('error');
 }
}*/