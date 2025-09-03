
//Await solo esta disponible en las funciones que tienen la palabra clave "async" al inicio.
async function requestHandler( req, res){

    // Para manejar errores con async/await, podemos usar un bloque try/catch
    try {
        // Podemos guardar el resultado en una variable|constante o simplemente ejecutar en seco sin guardarlo en ninguna parte
        const user = await User.findById(req.userId); // El await indica que el codigo que le sigue es asincrono y va a tomar tiempo
        const task = await Task.findById(user.taskId);

        res.send(task);
    } catch (error) {
        res.send(error);
    }
}