# ServerlessWars: Google Cloud functions

In this platform, we have deployed following function:

```javascript
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
```

We have tested with 2 different values for base number: 1 and 3, in the same manner we are doing for other vendors, usign following configuration

- Region: us-central1
- Memory and CPU runtime configuration: 256 MB ( 400 Mhz ). This is the default configuration

Obtained result are:

Base number=1

| Users        | Min           | Max  | Avg | Throughput |
| ------------- |-------------:| -----:| -----: | -----: | 
| 25      | 132 | 1241	 | 144 | 152,6 | 
| 50      | 132 | 2886 | 147 | 288,9 | 
| 150      | 131 | 6157 | 147 | 854,4 | 

Base number=3

| Users        | Min           | Max  | Avg | Throughput |
| ------------- |-------------:| -----:| -----: | -----: | 
| 25      | 140 | 2142	| 182 | 122,1 | 
| 50      | 139 | 4611 | 192 | 228,3 | 
| 150      | 139 | 12508 | 228 | 568,4 | 

## Gooogle cloud environment configuration

In Google we have to choose between different memory and CPU configurations for the function runtime (that is based on docker under the hood).

In order to check how these configuration affect our syntetic test, we have performed additional tests with additional configurations  

Base number=3. Runtime: 512 MB and 800 Mhz

| Users        | Min           | Max  | Avg | Throughput |
| ------------- |-------------:| -----:| -----: | -----: | 
| 25      | 142 | 1533	| 162 | 137,8 | 
| 50      | 140 | 8356 | 175 | 248 | 
| 150      | 140 | 5633 | 179 | 753,7 | 

Base number=3. Runtime: 1024 MB and 1400 Mhz

| Users        | Min           | Max  | Avg | Throughput |
| ------------- |-------------:| -----:| -----: | -----: | 
| 150      | 139 | 3110 | 155 | 838,7 | 

## Results and conclusions

It seems that as the load is increased, we are getting the best result with more capable environments. However with low load, it does not improve the results, so, as the higher environment implies the higher price, we shound carefully choose the proper one to maximize throughput and minimize cost

Google is scalling very well, up to a throughput of 838,7 req/sec in our tests. 
Anyway we are going to use the standar environmt (based in 256 MB) in order to compare with other vendors