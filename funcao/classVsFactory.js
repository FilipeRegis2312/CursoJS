class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Filipe')
console.log(p1.nome)
p1.falar()

const pessoaCriar = nome => {
    return { falar: () => console.log(`Meu nome é ${nome}`) }
}

const p2 = pessoaCriar('Regis');
p2.falar();