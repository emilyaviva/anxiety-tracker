/*global $:false */
'use strict';

$(function() {

  $('#new-entry').on('submit', function(event) {
    event.preventDefault();
    var newDate = $('#new-date').val();
    var newScale = $('#new-scale').val();
    var newNotes = $('#newNotes').val();
    $.post('/day', [anxietyLog, newDate, newScale, newNotes], function(response) {
      
    });
  });

})