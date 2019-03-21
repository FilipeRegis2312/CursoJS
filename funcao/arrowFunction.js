let dobro = function (s) {
    return 2 * s;
}

console.log(dobro(2))

dobro = (s) => {
    return 2 * s;
}

console.log(dobro(2))

dobro = s => 2 * s;

console.log(dobro(2))

let ola = function () {
    return 'Olá'
}

let ola1 = _ => 'olá';

console.log(`${ola()} ${ola1()}`)
