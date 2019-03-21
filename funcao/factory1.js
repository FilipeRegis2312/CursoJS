//Sem função factory
/*const prod1 = {
    nome: '...',
    preco: 45
}
const prod2 = {
    nome: '...',
    preco: 45
}
*/

//Com função factory
function criarPessoa(nome, sobrenome) {
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}

console.log(criarPessoa('Filipe', 'Regis'))