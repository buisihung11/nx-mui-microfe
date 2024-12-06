using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;

namespace __Namespace__
{
    public class SampleHttpFunction
    {
        private readonly ILogger<SampleHttpFunction> _logger;

        public SampleHttpFunction(ILogger<SampleHttpFunction> logger)
        {
            _logger = logger;
        }

        [Function("SampleHttpFunction")]
        public IActionResult Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", "post")] HttpRequest req)
        {
            _logger.LogInformation("C# HTTP trigger function processed a request.");
            return new OkObjectResult("Welcome to Azure Functions HungBS 123!");
        }
    }
}
