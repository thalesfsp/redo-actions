/**
 * @author Thales Pinheiro
 * @since 07/31/2015
 * @copyright Thales Pinheiro
 * Control the UI behaviour
 */

var Actions = {
  list: {
    reset: function() {
      $('.list').empty();
    },

    append: function(text) {
      // add item to the UI
      $('.list').append('<li>' + text + '</li>');
    },

    update: function(list) {
      // save reference
      var self = this;

      // reset element
      this.reset();

      // iterate and add to the element
      list.forEach(function(item) {
        self.append(item.text);
      });
    }
  },

  text: {
    reset: function() {
      $('.text').val('');
    }
  }
};
