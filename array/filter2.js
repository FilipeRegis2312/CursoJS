Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray;
}

function teste(aa) {

}
[1,2,3,4].filter2()
teste('aa')

teste([1,2,3,4])

const produto = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 18.99, fragil: false }
]

function retornaFragil(p, b) {
    if (p.nome === b) {
        return true;
    }
}

console.log(produto.filter2(function (p) {
        return true;
}))
