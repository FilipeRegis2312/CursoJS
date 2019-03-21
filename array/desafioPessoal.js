const telefones = [991915007, 30371779, 992726215, 984224210]
const mascaraTelefone = (e) => {
    const a = {telefone: e};
    console.log(a.telefone)
    for(let n in a){
        console.log(n)
    }
    if(a.length > 4){
        console.log('a')
    }
    return `(47) ${e}`
}

console.log(telefones.map(mascaraTelefone))