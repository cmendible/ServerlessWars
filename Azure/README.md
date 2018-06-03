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

We have tested with just one value for base number: 3 usign following configuration

- Region: East US 2
- App Insights: disabled

However, we have added a second test in Azure, with the same function implemented in C# and .Net Core 2

Obtained result are:


Base number=3. Javascript

| Users        | Min           | Max  | Avg | Throughput |
| ------------- |-------------:| -----:| -----: | -----: | 
| 25      | 140   | 2631	| 237 | 92,4 | 
| 50      | 141 | 8438 | 250 | 175,7 | 
| 150      | 125 | 16534 | 352 | 382,3 | 


Base number=3. .NET Core

| Users        | Min           | Max  | Avg | Throughput |
| ------------- |-------------:| -----:| -----: | -----: | 
| 25      | 118   | 1387	| 198 | 113,1 | 
| 50      | 118 | 14452 | 226 | 183,7 | 
| 150      | 119 | 19111 | 289 | 425,2 | 


## Results and conclusions

bla bla bla




