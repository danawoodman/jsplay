// Hack to require numtools lib
var fs = require('fs')
  , numtools = fs.readFileSync('./numtools.js', 'utf-8');
eval(numtools);

describe("Number", function() {
  it(".times()", function() {
    var count = 0;
    (3).times(function (index) {
      count += 1;
    });
    expect(count).toBe(3);
  });
});
