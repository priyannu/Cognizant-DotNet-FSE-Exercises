using WebApi_Exercise1.Filters;

namespace WebApi_Exercise1
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container
            builder.Services.AddControllers(options =>
            {
                options.Filters.Add<CustomExceptionFilter>();
            });

            // Swagger configuration
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
                {
                    Title = "Swagger Demo",
                    Version = "v1",
                    Description = "TBD",
                    TermsOfService = new Uri("https://www.example.com"),
                    Contact = new Microsoft.OpenApi.Models.OpenApiContact
                    {
                        Name = "John Doe",
                        Email = "john@xyzmail.com",
                        Url = new Uri("https://www.example.com")
                    },
                    License = new Microsoft.OpenApi.Models.OpenApiLicense
                    {
                        Name = "License Terms",
                        Url = new Uri("https://www.example.com")
                    }
                });
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline
            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Swagger Demo");
            });

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}