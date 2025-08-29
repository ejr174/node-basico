const fs = require('node:fs') // modulo nativo para trabajar con el sistema de archivos

console.log('Leyendo el primer archivo... ')
const text = fs.readFileSync('archivo.txt', 'utf-8') // lee el archivo de forma sincrona, si no existe lanza un error

console.log(text);

console.log('Hacer cosas mientras lee el archivo...');

console.log("Leyendo el segundo archivo... ");
const secondText = fs.readFileSync("archivo2.txt", "utf-8");

console.log(secondText);
