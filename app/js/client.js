/*global $:false */
'use strict';

$(function() {

  $('#new-entry').on('submit', function(event) {
    event.preventDefault();
    var newDay = [$('#new-date').val(), $('#new-scale').val(), $('#new-notes').val()];
    $.post('/day', newDay, function(response) {

    });
  });

})
