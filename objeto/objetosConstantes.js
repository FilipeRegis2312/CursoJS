const pessoa = { nome: 'João' }

Object.freeze(pessoa);

pessoa.nome = 'Maria'
console.log(pessoa.nome)