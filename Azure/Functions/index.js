module.exports = function (context, req) {
  var calculatedResult = 0;

  calculatedResult = mySlowFunction(10);
  context.res = {
    body: 'Calculated value:' + calculatedResult
  };

  context.done();
}

function mySlowFunction(baseNumber) {
  console.time('mySlowFunction');
  var result = 0;
  for (var i = Math.pow(baseNumber, 10); i >= 0; i--) {
    result += Math.atan(i) * Math.tan(i);
  };
  console.timeEnd('mySlowFunction');
  return result;
}