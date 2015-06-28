/*global $:false */
'use strict';

$(function() {

  $('#new-entry').on('submit', function(event) {
    event.preventDefault();
    var newEntry = [$('#new-date').val(), $('#new-scale').val(), $('#new-notes').val()];
    $.post('/day', anxietyLog, newEntry, function(response) {

    });
  });

})
