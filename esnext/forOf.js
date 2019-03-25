for(let letra of 'Cod3r'){
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for(let i of assuntosEcma) {
    console.log(i)
}

const assuntoMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for(let i of assuntoMap) {
    console.log(i)
}

for(let [ch,vl] of assuntoMap.entries()) {
    console.log(ch, vl)
}
