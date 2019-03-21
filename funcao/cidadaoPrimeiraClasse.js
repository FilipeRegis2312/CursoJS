//forma literal função

function fun1() {
};

//Armarzenar função em uma variavel
const fun2 = function () {

};

//Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2];
console.log(array[0](2, 3))

//Armazenar em um atr de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

//Função como parametro
function run(fun) {
    fun();
}

run(function () { console.log('Não to entendendo nada') })

//função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2,6)(8)