using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace GiClubSite.Models
{
    public class Event
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EventId { get; set; }
        public string E_Title { get; set; }
        public string E_Description { get; set; }
        public string E_Details { get; set; }
        public DateTime E_Date { get; set; }
        public string E_Status { get; set; }
        public DateTime? E_CreatedAt { get; set; }
        public DateTime? E_DeletedAt { get; set; }
        public List<EventFile> EventFiles { get; set; }
    }
}