const soma = (x, y) => x + y;

const imprimirResultado = (a, b, operacao = soma) => console.log(operacao(a, b));

imprimirResultado(3, 3, (x, y) => x * y);

const pessoa = {
    falar: teste => console.log('Opa')
}

pessoa.falar()