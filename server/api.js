JsonRoutes.add("get", "/inscriptos/:query", function (req, res, next) {
  var query = new RegExp(req.params.query, "i");
  var json = Inscriptos.find({$and: [{name: {$regex: query}}, {acreditado: {$ne: true}}]}).fetch();
  JsonRoutes.sendResult(res, 200, json);
});
