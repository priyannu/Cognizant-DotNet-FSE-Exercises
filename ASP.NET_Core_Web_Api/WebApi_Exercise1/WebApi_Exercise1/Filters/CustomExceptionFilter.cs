using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace WebApi_Exercise1.Filters
{
    public class CustomExceptionFilter : ExceptionFilterAttribute
    {
        public override void OnException(ExceptionContext context)
        {
            string message = $"[{DateTime.Now}] {context.Exception.Message}";

            File.AppendAllText("ExceptionLog.txt", message + Environment.NewLine);

            context.Result = new ObjectResult("Internal Server Error")
            {
                StatusCode = StatusCodes.Status500InternalServerError
            };

            context.ExceptionHandled = true;
        }
    }
}