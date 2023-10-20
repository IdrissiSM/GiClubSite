using GiClubSite.Context;
using GiClubSite.Models;
using GiClubSite.Requests;
using GiClubSite.Responses;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace GiClubSite.Services
{
    public class EventService : IEventService
    {
        public GiClubSiteContext Context { get; set; }
        private readonly IWebHostEnvironment HostEnvironment;

        public EventService(GiClubSiteContext context, IWebHostEnvironment hostEnvironment)
        {
            Context = context;
            HostEnvironment = hostEnvironment;
        }

        // GetEvents to get all events in datatabase -----------------------
        public async Task<List<EventResp>> GetEvents()
        {
            var Events = await Context.Event
                .Include(e=>e.EventFiles)
                .OrderByDescending(e=>e.E_Date)
                .Select(e => new EventResp
                {
                    E_Id = e.EventId,
                    E_Title = e.E_Title,
                    E_Description = e.E_Description,
                    E_Date = e.E_Date,
                    E_Details = e.E_Details,
                    E_Status = e.E_Status,
                    EventFiles = e.EventFiles.Select(ef => new EventFileResp
                        {
                            EF_Id = ef.EventId,
                            src = "https://localhost:44321/Images/"+ef.EF_Name,
                            altText = ef.EF_Name,
                            caption = ""
                    })
                        .ToList()
                })
                .ToListAsync();
                return Events;
        }
        //------------------------------------------------------------------------------------------

        // Function SaveImage : ----------------------------------------------------------------------------------------------------
        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new string(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(HostEnvironment.ContentRootPath, "Images", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
        }

        // AddEvent To add a new Event ------------------------------------
        public async Task<int> AddEvent(EventReq eventRequest)
        {
            int res = 0;

            using var transaction = Context.Database.BeginTransaction();

            try
            {
                Event newEvent = new()
                {
                    E_Title = eventRequest.E_Title,
                    E_Description = eventRequest.E_Description,
                    E_Details = eventRequest.E_Details,
                    E_Date = eventRequest.E_Date,
                    E_Status = eventRequest.E_Status,
                    E_CreatedAt = System.DateTime.Now
                };
                Context.Event.Add(newEvent);
                res = await Context.SaveChangesAsync();
                var newEventId = newEvent.EventId;

                foreach (var eventFile in eventRequest.EventFiles)
                {
                    var newEventFile = new EventFile
                    {
                        EF_Name = await SaveImage(eventFile),
                        EventId = newEventId
                    };
                    Context.EventFile.Add(newEventFile);
                }

                res = await Context.SaveChangesAsync();
                if (res > 0)
                {
                    transaction.Commit();
                }
                return res;
            }
            catch
            {
                await transaction.RollbackAsync();
                return res;
            }
        }
        //------------------------------------------------------------------------------------------


        // Function AddEventFile to add Event File and make association with The event by Id.
        public async Task<int> AddEventFile(EventFileReq newEventFileReq)
        {
            int res = 0;
            using var transaction = Context.Database.BeginTransaction();

            var eventName = await Context.Event.Where(m => m.EventId == newEventFileReq.EventId).FirstOrDefaultAsync();

            try
            {
                var newEventFile = new EventFile
                {
                    EF_Name = await SaveImage(newEventFileReq.EF_File),
                    EventId = newEventFileReq.EventId
                };

                Context.EventFile.Add(newEventFile);
                res = await Context.SaveChangesAsync();
                if (res > 0)
                {
                    transaction.Commit();
                }
                return res;
            }
            catch
            {
                await transaction.RollbackAsync();
                return res;
            }
        }
        //----------------------------------------------------------------------------


        // RemoveEvent can remove an Event By Id ------------------------------------
        public async Task<int> RemoveEvent(int EventId)
        {
            int res = 0;
            using var transaction = Context.Database.BeginTransaction();

            var EventToRemove = await Context.Event.FindAsync(EventId);
            try
            {
                Context.Event.Remove(EventToRemove);
                res = await Context.SaveChangesAsync();
                if (res > 0)
                {
                    transaction.Commit();
                }
                return res;
            }
            catch
            {
                await transaction.RollbackAsync();
                return res;
            }
        }
    }
}
