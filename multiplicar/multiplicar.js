const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    for (let i = 0; i < (limite - 1); i++) {
        let mul = base * (i + 1);
        data += (`${base}*${i+1} = ${mul} \n`);
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('ingrese un numero porfavor');
            return;
        }

        let data = '';

        for (let i = 0; i < limite; i++) {
            let mul = base * (i + 1);
            data += (`${base}*${i+1} = ${mul} \n`);
        }

        fs.writeFile(`tablas/Tabla-${base}.txt-al-${limite}`, data, (err) => {

            if (err) reject(err);
            else
                resolve(`archivo Tabla-${base}.txt-al-${limite}`);
        });
    });
}


module.exports = {
    crearArchivo,
    listarTabla
}