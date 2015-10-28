var fs = require('fs'),
  reporter = require('./reporter');

module.exports = function(result) {
  'use strict';
  var xml = reporter.report(result);
  fs.writeFileSync(__dirname + '/test/' + result[0]._file._filename + '.xml', xml);
}
