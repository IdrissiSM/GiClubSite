using Microsoft.AspNetCore.Http;

namespace GiClubSite.Requests
{
    public class EventFileReq
    {
        public int EventId { get; set; }
        public IFormFile EF_File { get; set; }
    }
}
