Template.botonAcreditar.events({
	'click': function (event) {
		var id = $(event.target).closest("tr").attr("data-id");
		Inscriptos.acreditar(id);
	}
});

Template.botonDeshacer.events({
	'click': function (event) {
		var id = $(event.target).closest("tr").attr("data-id");
		Inscriptos.desacreditar(id);
	}
});

Template.inputAcreditar.events({
	'click .results' : function() {
		$('.ui.search input.prompt').val(function() {
            return this.defaultValue;
        });
	}
});

Template.menu.events({
	'click .inscriptos' : function() {
		Session.set("inscriptos", true);
		Session.set("acreditados", false);

		var activeElement = $(".menu a.inscriptos");
		var nonActiveElement = $(".menu a.acreditados");

		if (!activeElement.hasClass('header')) {
			activeElement.addClass('header');
			nonActiveElement.removeClass('header');
		}

	},
	'click .acreditados' : function() {
		Session.set("inscriptos", false);
		Session.set("acreditados", true);

		var activeElement = $(".menu a.acreditados");
		var nonActiveElement = $(".menu a.inscriptos");

		if (!activeElement.hasClass('header')) {
			activeElement.addClass('header');
			nonActiveElement.removeClass('header');
		}
	}
});
