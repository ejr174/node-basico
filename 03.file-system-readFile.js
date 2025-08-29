const fs = require('node:fs') // modulo nativo para trabajar con el sistema de archivos

console.log('Leyendo el primer archivo... ')

fs.readFile('archivo.txt', 'utf-8', (err, text) => { // Lee el archivo,  lo codifica en utf-8, cuando termine sigue ejecutando el codigo del callback
    console.log('primer texto:', text);
}) // lee el archivo de forma asincrona, si no existe lanza un error. Lee 

// Mientra lee el archivo esto se ejecuta sin esperar que termine de leer el archivo
console.log('Hacer cosas mientras lee el archivo...');

console.log("Leyendo el segundo archivo... ");
fs.readFile("archivo2.txt", "utf-8", (err, text) => {
    if (err) {
        console.error("Error al leer el segundo archivo:", err);
        return;
    }
    console.log('segundo texto:', text);
});

