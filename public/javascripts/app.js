/**
 * @author Thales Pinheiro
 * @since 07/31/2015
 * @copyright Thales Pinheiro
 * Bootstrap the app
 */

// Initialize list (model)
var list = new List();

// Conditionally update list (element)
var _list = list.get();

if (_list) {
  if (_list.length > 0) {
    Actions.list.update(list.get());
  }
}
