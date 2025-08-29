const os = require('node:os') // modulo nativo que nos da informacion del sistema operativo

console.log('Información del sistema operativo:')
console.log(`Sistema: ${os.type()}`)
console.log(`Plataforma: ${os.platform()}`)
console.log(`Arquitectura: ${os.arch()}`)
console.log(`Versión: ${os.release()}`)
console.log(`CPUs: ${os.cpus().length}`)//  -> Sirve para poder escalar procesos en Node
console.log(`Memoria total: ${os.totalmem()} bytes`)
console.log(`Memoria libre: ${os.freemem()} bytes`)
console.log(`Uptime: ${os.uptime() /60 /60} horas`)