const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const nacionalidadeChinesa = (p) => p.pais == 'China';
const sexoFeminino = (p) => p.genero == 'F';
const menorSalario = (menorSal, salarioVar) => {
    //console.log(menorSal.salario, salarioVar.salario)
    return menorSal.salario < salarioVar.salario ? menorSal : salarioVar;
}

axios.get(url).then(response => {
    const { data } = response;
    let element = []
    for (let i = 0; i < Object.values(data).length; i++) {
        element[i] = data[i];
    }
    const elementTratado = element.filter(nacionalidadeChinesa).filter(sexoFeminino).reduce(menorSalario);
    console.log(elementTratado)
    
})
