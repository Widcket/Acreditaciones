var numInscriptos =  function () {
	return Inscriptos.find({acreditado : {$ne: true}}).count();
};

var numAcreditados = function () {
	return Inscriptos.find({acreditado : {$ne: false}}).count();
};

Template.registerHelper('hayMasDeUnAcreditado', function() {
     if (numAcreditados() === 1) return false;
     else return true;
});

Template.registerHelper('hayMasDeUnInscripto', function() {
     if (numInscriptos() === 1) return false;
     else return true;
});

Template.registerHelper('numInscriptos', function() {
     return numInscriptos();
});

Template.registerHelper('numAcreditados', function() {
     return numAcreditados();
});

Template.registerHelper('numParticipantes', function() {
     return numInscriptos() + numAcreditados();
});

Template.tablaAsistentes.helpers({
    asistente: function() {
    	return Inscriptos.find({acreditado : {$ne: false}}).fetch();
    },
});

Template.tablaInscriptos.helpers({
    inscripto: function() {
    	return Inscriptos.find({acreditado : {$ne: true}}).fetch();
    },
});

Template.tablaWrapper.helpers({
	acreditados: function() {
		return Session.get("acreditados");
	},
	inscriptos: function() {
		return Session.get("inscriptos");
	},
});

Template.inputAcreditar.onRendered(function () {
    $('.ui.search')
      .search({
        apiSettings: {
          url: '/inscriptos/{query}',
          onResponse: function(response) {
            var unsorted = response;
            var keys = Object.keys(unsorted);
            var items = [];
            for (var j = 0; j < keys.length; j++) {
              items[j] = unsorted[keys[j]];
            }
            var result = {};
            result["results"] = items;
            return result;
          }
        },
        searchFields : ['name'],
        fields: {
        	title : 'name',
        	description : 'email',
        	_id: '_id',
        	telefono: 'telefono',
        	acreditado: 'acreditado'
        },
        maxResults : 7,
        cache : false,
        searchFullText: false,
        error : {
			  noResults   : 'La búsqueda no obtuvo resultados.',
			  serverError : 'No se pudo consultar al servidor.',
			},
        onSearchQuery : function(query) {
        	var busqueda = query.trim();
        	return busqueda === '' ? false : busqueda;
        },
        onSelect : function(result, response) {
        	Inscriptos.acreditar(result._id);
      	},
        onResultsClose : function() {
        	$('.ui.search input.prompt').val(function() {
            	return this.defaultValue;
        	});
        }
      })
    ;
 }); //fin onRendered
