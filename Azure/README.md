# ServerlessWars: Azure functions

In this platform, we have deployed following function:

```javascript
module.exports = function (context, req) {
  var calculatedResult = 0;

  calculatedResult = mySlowFunction(10);
  context.res = {
    body: 'Calculated value:' + calculatedResult
  };

  context.done();
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
```

We have tested with 2 different values for base number: 1 and 3, in the same manner we are doing for other vendors, usign following configuration

- Region: ???


Obtained result are:

Base number=1

| Users        | Min           | Max  | Avg | Throughput |
| ------------- |-------------:| -----:| -----: | -----: | 
| 25      | ? | ?	 | ? | ? | 
| 50      | ? | ? | ? | ? | 
| 150      | ? | ? | ? | ? | 

Base number=3

| Users        | Min           | Max  | Avg | Throughput |
| ------------- |-------------:| -----:| -----: | -----: | 
| 25      | 158 | 6536	| 267 | 85,5 | 
| 50      | 155 | 8412 | 357 | 127,9 | 
| 150      | 154 | 9573 | 411 | 333 | 


## Results and conclusions

bla bla bla




