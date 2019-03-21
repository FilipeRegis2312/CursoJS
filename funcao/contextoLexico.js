const valor = 'Global'
let teste = 1;
function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao();
}

exec();