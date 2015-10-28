var xml = require('xmlbuilder');

var getErrorMessage = function (error) {
  var msg = error.message + ". Line: " + error.line + ". Column: " + error.column;

  return msg;
};

exports.report = function (result) {
  var errorsCount = 0;

  // Creating the <testsuite>
  var testsuite = xml.create('testsuite');
  testsuite.att('name', 'jscsreporter');

  result.forEach(function (element) {
    // Add the number of errors to the total of errors
    errorsCount += element._errorList.length;

    // Create the <testcase>
    var testcase = testsuite.ele('testcase', {
      name: element._file._filename
    });

    element._errorList.forEach(function (error) {
      // Create the <failure>
      testcase.ele('failure', { 'message': getErrorMessage(error) });
    });
  });

  testsuite.att('failures', errorsCount);
  console.log(testsuite.end({pretty: true}));

  return testsuite.end({pretty: true});
};
