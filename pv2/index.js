const users = [
    {
        username: 'Milly',
        email: 'mil@mil.com',
        password: '123',
        saldo: 550
    },
    {
        username: 'Jack',
        email: 'jack@jack.com',
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


let user = prompt('Ingresa tu correo');
let pass = prompt('Ingresa tu contraseña');

if (user === 'mil@mil.com' && pass === '123') {
    let saldo = 500;
    alert('Bienvenido');
    let opcion = prompt('¿Que movimiento deseas hacer? Consulta, Deposito, Retiro?');
    if (opcion != null) {
        opcion = opcion.toLowerCase();
        if (opcion === 'consulta') {
            alert(`Tu saldo actual es: ${saldo}`);
        } else if (opcion === 'deposito') {
            let sum = Number(prompt('¿Cuanto vas a depositar?'));
            let saldoActual = saldo + sum;
            alert(`Tu saldo actual es: ${saldoActual}`);
            alert(`Gracias por confiar en nosotros`);
        } else if (opcion === 'retiro') {
            let res = Number(prompt('¿Cuanto vas a retirar?'));
            let saldoActual = saldo - res;
            alert(`Tu saldo actual es: ${saldoActual}`);
            alert(`Gracias por confiar en nosotros`);
        }
    }
} else if (user === 'jackjunior@jack.com' && pass === '123') {
    let saldo = 300;
    alert('Bienvenido');
    let opcion = prompt('¿Que movimiento deseas hacer? Consulta, Deposito, Retiro?');
    if (opcion != null) {
        opcion = opcion.toLowerCase();
        if (opcion === 'consulta') {
            alert(`Tu saldo actual es: ${saldo}`);
        } else if (opcion === 'deposito') {
            let sum = Number(prompt('¿Cuanto vas a depositar?'));
            let saldoActual = saldo + sum;
            alert(`Tu saldo actual es: ${saldoActual}`);
            alert(`Gracias por confiar en nosotros`);
        } else if (opcion === 'retiro') {
            let res = Number(prompt('¿Cuanto vas a retirar?'));
            let saldoActual = saldo - res;
            alert(`Tu saldo actual es: ${saldoActual}`);
            alert(`Gracias por confiar en nosotros`);
        }
    }
} else if (user === 'nadia@nadia.com' && pass === '123') {
    let saldo = 150;
    sessionStorage.setItem('saldo',saldo);
    let variable = sessionStorage.getItem('saldo')//
    alert('Bienvenido');
    let opcion = prompt('¿Que movimiento deseas hacer? Consulta, Deposito, Retiro?');
    if (opcion != null) {
        opcion = opcion.toLowerCase();
        if (opcion === 'consulta') {
            alert(`Tu saldo actual es: ${saldo}`);
        } else if (opcion === 'deposito') {
            let sum = Number(prompt('¿Cuanto vas a depositar?'));
            let saldoActual = saldo + sum;
            alert(`Tu saldo actual es: ${saldoActual}`);
            alert(`Gracias por confiar en nosotros`);
        } else if (opcion === 'retiro') {
            let res = Number(prompt('¿Cuanto vas a retirar?'));
            let saldoActual = saldo - res;
            alert(`Tu saldo actual es: ${saldoActual}`);
            alert(`Gracias por confiar en nosotros`);
        }
    }
}
else {
    alert('error de usuario');
}
