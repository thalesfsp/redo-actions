/**
 * @author Thales Pinheiro
 * @since 07/31/2015
 * @copyright Thales Pinheiro
 * Main app model
 */

var List = function() {
  // *** Storage Helper - hidden the implementation ***

  var storage = {
    check: function() {
      if (amplify.store('redo-action')) {
        return true;
      } else {
        return false;
      }
    },

    count: function() {
      if (this.check()) {
        return  storage.get().length;
      }
    },

    get: function() {
      return amplify.store('redo-action');
    },

    persist: function(object) {
      amplify.store('redo-action', object);
    },

    reset: function() {
      // remove from localstorage
      amplify.store('redo-action', null);
    }
  };

  // *** Init ***

  var list;

  // check for previously data, syncronization
  if (!storage.check()) { // no
    list = []; // init new
  } else { // yes
    if (storage === 0) { // but there's no items
      list = []; // init
    } else { // with items
      list = storage.get(); // load that
    }
  }

  // *** Internal models: hidden the implementation ***

  /**
   * Item
   * @param {Date} date
   * @param {String} text
   */
  var Item = function(date, text) {
    return {
      date: date, // timestamp
      text: text // content
    };
  };

  // *** Exposed APIs ***

  return {
    save: function(text) {
      // create a new Item
      var item = new Item(new Date(), text);

      // add to list
      list.push(item);

      // persist to the local storage
      storage.persist(list);
    },

    redo: function() {
      var _redo = function() {
        // get list from storage
        list = storage.get();

        // remove the last item
        list.pop();

        // persist changes
        storage.persist(list);
      };

      // check the list into the localstorage
      if (storage.check) {
        if (storage.count() > 1) {
          // redo
          _redo();

          return storage.count();
        } else if (storage.count() === 1) {
          // redo
          _redo();

          // reset
          this.reset();

          return 0;
        } else {
          // reset
          this.reset();

          return -1;
        }
      }
    },

    get: function() {
      return storage.get();
    },

    reset: function() {
      // reset list
      list = [];

      // reset storage
      storage.reset();
    }
  };
};
