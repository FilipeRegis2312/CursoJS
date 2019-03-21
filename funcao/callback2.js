const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

//sem callback
let notasbaixas = [];
for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 7)
        notasbaixas.push(notas[i]);
}
console.log(notasbaixas);

//com callback
const funcNotas = ((nota) => nota < 7);
notasbaixas = notas.filter(funcNotas);
console.log(notasbaixas);

