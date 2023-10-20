using System;

namespace GiClubSite.Responses
{
    public class TaskResp
    {
        public int TaskId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        public string Notification { get; set; }
        public string Cell { get; set; }
        public string Age { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? DeletedAt { get; set; }
    }
}
