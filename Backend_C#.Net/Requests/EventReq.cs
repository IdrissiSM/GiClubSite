using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;

namespace GiClubSite.Requests
{
    public class EventReq
    {
        public string E_Title { get; set; }
        public string E_Description { get; set; }
        public string E_Details { get; set; }
        public DateTime E_Date { get; set; }
        public string E_Status { get; set; }
        public List<IFormFile> EventFiles { get; set; }
    }
}
