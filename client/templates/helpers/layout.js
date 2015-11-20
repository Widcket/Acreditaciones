Template.layout.helpers({
	acreditados: function() {
		return Session.get("acreditados");
	},
	inscriptos: function() {
		return Session.get("inscriptos");
	},
});
