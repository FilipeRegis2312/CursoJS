console.log(typeof Array, typeof new Array)

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana', 'Renato']
console.log(aprovados[0])
console.log(aprovados.push('Logan'))
console.log(aprovados)
console.log(aprovados[1] === 'Carlos')
aprovados.sort()
delete aprovados[1];
console.log(aprovados)

