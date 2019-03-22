const alunos = [
    { nome: 'João', nota: 8.0, bolsista: true },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: true },
    { nome: 'Regis', nota: 8.7, bolsista: true },
    { nome: 'Ana', nota: 8.0, bolsista: true }
]

const resultado = alunos.map(a => a.bolsista).reduce(function (resultado, bolsista) {
    return resultado && bolsista;
})

const resultado2 = alunos.map(a => a.bolsista).reduce(function (resultado, bolsista) {
    return resultado || bolsista;
})



//console.log(resultado)
//console.log(resultado2)
