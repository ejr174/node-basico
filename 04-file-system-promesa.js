const fs = require('node:fs/promises') // modulo nativo para trabajar con promesas

console.log('Leyendo el primer archivo... ')

fs.readFile('archivo.txt', 'utf-8')
    .then(text => {
        console.log('primer texto:', text);
    })
    .catch(err => {
        console.error("Error al leer el primer archivo:", err);
    });


// Mientra lee el archivo esto se ejecuta sin esperar que termine de leer el archivo
console.log('Hacer cosas mientras lee el archivo...');

console.log("Leyendo el segundo archivo... ");
fs.readFile("archivo2.txt", "utf-8")
    .then(text => {
        console.log('segundo texto:', text);
    })
    .catch(err => {
        console.error("Error al leer el segundo archivo:", err);
    });
