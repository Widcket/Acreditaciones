Inscriptos = new Mongo.Collection('inscriptos');

Inscriptos.acreditar = function(_id) {
  var fecha = new Date();
  var ahora = fecha.getDate() + "/"
    + (fecha.getMonth()+1)  + "/"
    + fecha.getFullYear() + " @ "
    + fecha.getHours() + ":"
    + fecha.getMinutes() + ":"
    + fecha.getSeconds();

  Inscriptos.update({"_id" : _id}, {$set : {"acreditado" : true, "cuando" : ahora, "quien" : "Rita"}});

}

Inscriptos.desacreditar = function(_id) {
  Inscriptos.update({"_id" : _id}, {$set : {"acreditado" : false, "cuando" : undefined, "quien" : undefined}});
}
