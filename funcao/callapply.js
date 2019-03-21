function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

function criaProduto(nome, preco, desc) {
    return {
        nome,
        preco,
        desc,
        getPreco
    }
}

const p1 = criaProduto('Notebook', 4589, 0.15)
const p2 = criaProduto('Notebook', 4589, 0.15)
const p3 = criaProduto('Notebook', 4589, 0.15)

global.preco = 20;
global.desc = 0.1;
console.log(getPreco())
console.log(p1.getPreco())

const p4 = criaProduto('Carro', 49990, 0.20)
console.log(getPreco.call(p4, 0.17, '$'));
console.log(getPreco.apply(p4, [0.17, '$']));