using GiClubSite.Requests;
using GiClubSite.Responses;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GiClubSite.Services
{
    public interface IEventService
    {
        Task<List<EventResp>> GetEvents();
        Task<int> AddEvent(EventReq eventRequest);
        Task<int> AddEventFile(EventFileReq eventFileReq);
        Task<int> RemoveEvent(int EventId);
    }
}
