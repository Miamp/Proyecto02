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

/*function login() {

    let user = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    index = users.findIndex(element => element === user);

    if (users[index]) {
        sessionStorage.setItem('user', user);
        window.location.href = "info.html";
        let saldoActual = users.findIndex(saldo[user]);

        document.addEventListener('DOMContentLoaded', function () {
            document.getElementById('welcome').innerText = `Hola`
            document.getElementById('cont-txt').innerText = `Tu saldo actual es: ${saldoActual}`
        });
    }
}*/

function login() {
    let user = document.getElementById('email').value;
    let pass = document.getElementById('password').value;

    if (user === 'mil@mil.com' && pass === '123') {
        sessionStorage.setItem('user', user);
        window.location.href = "info.html";
        let saldo = 500;
        document.addEventListener('DOMContentLoaded', function () {
            document.getElementById('welcome').innerText = 'Hola';
            document.getElementById('cont-txt').innerText = `Tu saldo actual es: ${saldo}`;
        }); 
        function depositar(){
            let sum = Number (prompt ('¿Cuanto vas a depositar?'));
            let saldoActual = saldo + sum;
            alert (`Tu saldo actual es ${saldoActual}`);
        }
        function retirar (){
            let res = Number (prompt('¿Cuanto vas a retirar?'));
            let saldoActual = saldo-res;
            alert(`Tu saldo actual es: ${saldoActual}`);
        }
    } else {
        alert('error');
    }
}
