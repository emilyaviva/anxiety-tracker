'use strict';

module.exports = function(newDay, logObject) {
  var newEntry = newDay[0];
  logObject[newEntry] = newDay;
  console.log(logObject);
};
