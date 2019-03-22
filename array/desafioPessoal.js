const telefones = [991915007, 30371779, 992726215, 984224210, 'abcdefghjiadssad']
const mascaraTelefone = (e) => {
    const c = new String(e);
    if (c.length == 9) {
        return `(47) ${c.substring(0, 5)}-${c.substring(5)}`
    } else if (c.length == 8) {
        return `(47) ${c.substring(0, 4)}-${c.substring(4)}`
    } else {
        return c.toLocaleUpperCase();
    }
}

console.log(telefones.map(mascaraTelefone))