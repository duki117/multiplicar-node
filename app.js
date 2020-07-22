// requireds// 
//const fs = require('fs');
//const fs = require('express');
//const fs = require('../');

const argv = require('./config/yargs').argv

/*let data = '';
for (let i = 0; i < 10; i++) {
    let mul = 2 * (i + 1);
    data += (`${base}*${i+1} = ${mul} q\n`);
}

fs.writeFile(`tablas/Tabla-${base}.txt`, data, (err) => {

    if (err) throw err;

    console.log(`El archivo Tabla-${base}.txt ha sido creado`);
});
*/


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}

//let base = '8';

//let argv2 = process.argv;

//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(base);
//console.log(multiplicar);

//crearArchivo(base)
//    .then(archivo => console.log(`Archivo creado: ${archivo}`))
//    .catch(e => console.log(e));