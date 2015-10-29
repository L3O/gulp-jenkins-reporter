var fs = require('fs'),
  jscsReporter = require('./reporters/jscs-reporter');

module.exports = function (result) {
  'use strict';
  var xml = jscsReporter.report(result);
};
