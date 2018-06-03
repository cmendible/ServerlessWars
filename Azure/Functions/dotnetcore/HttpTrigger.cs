namespace dotnetcore
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Azure.WebJobs.Host;

    public class HttpTrigger
    {
        public static IActionResult Run(HttpRequest req, TraceWriter log)
        {
            var calculatedResult = 0D;
            calculatedResult = MySlowFunction(3);
            return (ActionResult)new OkObjectResult("Calculated value: " + calculatedResult);
        }

        public static Double MySlowFunction(int baseNumber)
        {
            Console.WriteLine("Starting...");
            var result = 0D;
            for (var i = Math.Pow(baseNumber, 10); i >= 0; i--)
            {
                result += Math.Atan(i) * Math.Tan(i);
            };
            return result;
        }
    }
}