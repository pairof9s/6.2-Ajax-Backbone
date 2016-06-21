var $ = require('jquery');
var CharacterCollection = require('./models/person').CharacterCollection;


var starwarsCharacters = new CharacterCollection();

var startGameView = {
  clear: function(){

  },
  render: function(collection){
      $('.app').html('<select name="js-firstCharacter" id="js-firstCharacter" /><select name="js-secondCharacter" id="js-secondCharacter" />');

      collection.each(function(character){
      $('#js-firstCharacter').append('<option value="' + character.cid +'">' + character.get('name') + '</option>');
      $('#js-secondCharacter').append('<option value="' + character.cid +'">' + character.get('name') + '</option>');

      $('.app').append('<button class="attack btn btn-danger">Select</button>');

      $('start').on('click', function(event){
        characterView.render};
      }
  };


var characterListView = {
  clear: function(){

  },
  render: function(){
    var charOne = starwarsCharacters.find(function(model){
      return model.cid == $('#js-firstCharacter').val()
    });
    var charTwo = starwarsCharacters.find(function(model){
      return model.cid == $('#js-secondCharacter').val()
    });
    $('.app').append('<button class="attack btn btn-danger">Attack!</button>');
    $('start').hide();

    $('.characters').append('<div class="col-md-6">' + charOne.get('name') + charOne.get('health') + '</div>');
    $('.characters').append('<div class="col-md-6">' + charTwo.get('name') + charTwo.get('health') + '</div>');

    $('.attack').on('click', function(){
      charOne.attack(charTwo);
      console.log(charTwo.get('health'));
    });

    charTwo.on('change:health', this.updateCharacter);
  },
  updateCharacter: function(model){
    alert('updateCharacter'),
    $('.app').append('<h1>' + model.get('health') + '</h1>');
  }
};

starwarsCharacters.fetch().done(function(){
  console.log('Fetch complete!');
  console.log(starwarsCharacters);

startGameView.render(starwarsCharacters);

});






/*
* "Like" button - to make singular & plural concantate
*/

// var LikeButton = require ('./models/button');
//
// var faceBookLikeButton = new LikeButton({likes: 0, 'label': ' Like'});
//
// var tweeterButton = new LikeButton({likes: 230, 'label': ' Tweet'})
