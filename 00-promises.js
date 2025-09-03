
// Las promesa se conforma por 2 metodos then y catch
// then se ejecuta cuando la promesa se resuelve correctamente
// catch se ejecuta cuando la promesa es rechazada
function requestHandler(req, res){
    User.findById( req.userId)
    .then(function(user) {
        return Task.findById(user.taskId)
        //res.send(user);
    })
    //Podemos hacer otras|continuar tareas sin necesidad de anidar callbacks
    .then(function(tasks) {
        res.send(tasks);
    }) 
    // El catch recibe cualquier error de las promesas anteriores
    .catch(function(errores) {
        res.send(errores);
    })

}