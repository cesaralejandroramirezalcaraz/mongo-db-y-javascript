
// genera datos de prueba  
var arreglo =[1,2,3,4,5,6,7,8,9,10];
arreglo.forEach(element => {
   db.persona.insert({
      "_id":element,
      "nombre":"nombre"+element
   
   });
});

arreglo.forEach(element => {
   db.empleado.insert({
      "_id":element,
      "empleado":"empleado"+element

   });
   
});


 

