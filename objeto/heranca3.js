const pai = { nome: 'Filipe', corCabelo: 'Preto' }
const filha1 = Object.create(pai)
filha1.nome = 'Haylla'
console.log(filha1.nome)

const filha2 = Object.create(pai, {
    nome: {
        value: 'Alicia', writable: false, enumerable: true
    }
})

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)
console.log()

for(let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}