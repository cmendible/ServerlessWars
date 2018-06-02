const https = require('https');

/**
 * Pass the data to send as `event.data`, and the request options as
 * `event.options`. For more information see the HTTPS module documentation
 * at https://nodejs.org/api/https.html.
 *
 * Will succeed with the response body.
 */
exports.handler = (event, context, callback) => {
    
    var calculatedResult = 0;
    calculatedResult = mySlowFunction(3);

    context.succeed({
        body: 'Calculated value:' + calculatedResult
    });
};

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