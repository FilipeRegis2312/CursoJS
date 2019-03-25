const fs = require('fs')
try {
    const config = require('/arquivoGerado.json')
    console.log(config || 'Arquivo sem dados')
} catch (e) {
    console.log('Erro no arquivo. ' + e)
}





