using GiClubSite.Requests;
using GiClubSite.Responses;
using GiClubSite.Services;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GiClubSite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        public IEventService EventService { get; set; }
        public EventController(IEventService eventService)
        {
            EventService = eventService;
        }

        [HttpPost("AddEvent")]
        public async Task<ActionResult<int>> AddEvent([FromForm] EventReq eventRequest)
        {
            int result = await EventService.AddEvent(eventRequest);

            if (result != 0)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpPost("AddEventFile")]
        public async Task<ActionResult<int>> AddEventFile([FromForm] EventFileReq newEventFileReq)
        {
            int result = await EventService.AddEventFile(newEventFileReq);

            if (result != 0)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpGet("GetEvents")]
        public async Task<List<EventResp>> GetEvents()
        {
            return await EventService.GetEvents();
        }

        [HttpDelete("RemoveEvent")]
        public async Task<int> RemoveEvent(int EventId)
        {
            return await EventService.RemoveEvent(EventId);
        }
    }
}