// Es de lo mas importante e interesante
// FS = File System -> Sistema de archivos
const fs = require('node:fs') // a partir de node 16, se recomienda poner el pre fijo node:

const stats = fs.statSync('archivo.txt') // Nos da informacion del archivo

console.log(
    stats.isFile() ? 'Sí es archivo' : 'No es archivo',
    stats.isDirectory() ? 'Sí es un directorio' : 'No es un directorio',
    stats.isSymbolicLink() ? 'Sí es un enlace simbólico' : 'No es un enlace simbólico',
    stats.size + ' bytes',

)

// fs.writeFileSync('archivo.txt', 'Hola, este es un archivo de texto creado con Node.js')