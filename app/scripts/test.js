var Backbone = require('backbone');
var $ = require('jquery');

var Starships = Backbone.Model.extend();

var ShipCollection = Backbone.Collection.extend({
  model: starShips,
  url: 'http://swapi.co/api/starships/'
  parse: function(data){
    return data.results;
  }
});

var starshipGroup = new ShipCollection();

starshipGroup.fetch()

starshipGroup.on('add', function(model){
  $('.app').append(model.get('name'));
});

module.exports = {
'Starships': Starships,
'ShipCollection': ShipCollection
}
