using GiClubSite.Context;
using GiClubSite.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json.Serialization;
using System.IO;

namespace GiClubSite
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // 
            services.AddCors(c =>
            {
                c.AddPolicy("AlowOrigin", option => option
                .AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            });

            // Json serializer
            services.AddControllersWithViews()
                .AddNewtonsoftJson(option =>
            option.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
            )
                .AddNewtonsoftJson(option=>option.SerializerSettings.ContractResolver=new DefaultContractResolver());


            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "GiClubSite", Version = "v1" });
            });

            // conncetion string
            services.AddDbContext<GiClubSiteContext>(
                options => options.UseSqlServer(Configuration.GetConnectionString("DbConn"))
                );
            services.AddScoped<IMemberService, MemberService>();
            services.AddScoped<IEventService, EventService>();
            services.AddScoped<IContactMailService, ContactMailService>();
            services.AddScoped<ITaskService, TaskService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "GiClubSite v1"));
            }
            app.UseCors(option=>option.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(env.ContentRootPath, "Images")),
                RequestPath = "/Images"
            });
        }
    }
}
