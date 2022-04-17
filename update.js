//C:\\   load("C:\\Users\\alex\\Desktop\\insert.js");
//var consulta = db.personas.find().pretty();
//var consulta = db.empleado.find().pretty();

/*
se quiere agregar el campo nombre que exsiste en la colección persona a la colección  empleado
*/


var consultaEmpleados = db.empleado.find();
consultaEmpleados.forEach(element => {

    var consultaPersona = db.persona.find({ '_id': element._id });

    consultaPersona.forEach(element2 => {

        db.empleado.update({ '_id': element2._id },
            {
                $set: { 'nombre': element2.nombre }
            })

    });


});







