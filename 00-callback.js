// Request Handler -> Manejador de peticion. Este recibe 2 cosas
// Requerimiento|Informacion del usuario (request) y Respuesta|Informacion que se envia al navegador (response)
function requestHandler(req, res){
    // Simulemos que este requestHandler consulta una base de datos. Entonces debemos esperar que la base de datos
    // Procese lo que le indicamos y nos envie la respuesta con la informacion.

    //Necesitamos esperar a que nos llegue la respuesta, y para esto utilizamos un callback
    // Para eso creamos una funcion que lo que hace es esperar por la respuesta y cuando llegue esta se puede manipular mediante la funcion.
    // La respuesta nos puede dar un error o en este caso el usuario de la consulta.
    User.findById(req.userId, function(err, user){
        if (err) {
            res.status(500).send("Error al buscar el usuario"); // Envía un error como respuesta
            return;
        } else {
            Task.findById(user.taskId, function(err, task){
                if (err) {
                    res.status(500).send("Error al buscar la tarea");
                    return;
                }
                res.send(task);
            });
        }
        
    });
}