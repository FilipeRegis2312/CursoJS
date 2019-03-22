const produto = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 18.99, fragil: false }
]

let b = 0;

function retornaFragil(p) {
    let teste = 'aa';
    if (!p.fragil) {
        return true;
    }
    b++;
}
console.log(teste)

console.log(produto.filter(retornaFragil), b)

