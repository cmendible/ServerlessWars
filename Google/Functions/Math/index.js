/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
  exports.mathGET = (req, res) => {
      var calculatedResult=0;
      
      calculatedResult = mySlowFunction(3);
      res.send('Calculated value:' + calculatedResult);
    };


    function mySlowFunction(baseNumber) {
      
      console.log('starting');
      console.time('mySlowFunction');
      var result = 0;	
      for (var i = Math.pow(baseNumber, 10); i >= 0; i--) {		
        result += Math.atan(i) * Math.tan(i);
      };
      console.timeEnd('mySlowFunction');
      return result;
    }