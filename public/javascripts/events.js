/**
 * @author Thales Pinheiro
 * @since 07/31/2015
 * @copyright Thales Pinheiro
 * DOM elements events
 */

$('.save').click(function() {
  // get text
  var text = $('.text').val();

  // validate
  if (!text) {
    alert('You need to type something no?!');
  } else {
    // save to the List (model)
    list.save(text);

    // update list (element)
    Actions.list.update(list.get());
  }

  // clear input
  Actions.text.reset();
});

$('.redo').click(function() {
  if (list.redo() > 0) {
    // update list (element)
    Actions.list.update(list.get());
  } else {
    // reset list (element)
    Actions.list.reset();
  }

  // reset input
  Actions.text.reset();
});

$('.reset').click(function() {
  // reset the list (model)
  list.reset();

  // reset elements
  Actions.list.reset();
  Actions.text.reset();
});
