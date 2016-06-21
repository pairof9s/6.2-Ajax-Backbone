var $ = require('jquery');
var Backbone = require('backbone');

/* For creating a "Like" button that distinguishes whether singular "like" for 1 and "likes" for 2+
*/
var LikeButton = Backbone.Model.extend({
  defaults: {
    likes: 100,
    label: 'Like',
  },
  initialize: function(){
    var self = this;
    var $button = $('<button class="btn btn-primary" />');
    $('.app').append($button);

    //self.updateLabel($button);  For original "Like" button code
    self.toJSON($button);

    $button.on('click', function(event){
      event.preventDefault();
      self.countLikes();
      //self.updateLabel(this); For original "Like" button code
      self.toJSON(this);
    });
  },
  countLikes: function(event){
    var newLikes = this.get('likes') + 1;
    this.set('likes', newLikes);
  },

  toJSON: function(btn){
  //updateLabel: function(btn){  For original "Like" button code
    var $button = $(btn);
    var plural = this.get('likes') == 1 ? '' : 's';

    $button.text(this.get('likes') + ' ' + this.get('label') + plural);

    return Backbone.Model.prototype.toJSON.call(this);
  },
});

module.exports = LikeButton;
