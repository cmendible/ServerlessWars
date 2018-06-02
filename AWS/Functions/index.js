exports.handler = function (event, context) {
  var calculatedResult = 0;
  calculatedResult = mySlowFunction(3);
  context.succeed('Calculated value:' + calculatedResult);
}

function mySlowFunction(baseNumber) {

  console.log('Starting...');
  console.time('mySlowFunction');
  var result = 0;
  for (var i = Math.pow(baseNumber, 10); i >= 0; i--) {
    result += Math.atan(i) * Math.tan(i);
  };
  console.timeEnd('mySlowFunction');
  return result;
}