
using Microsoft.AspNetCore.Http;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace GiClubSite.Models
{
    public class EventFile
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EventFileId { get; set; }
        public string EF_Name { get; set; }
        [NotMapped]
        public IFormFile EF_File { get; set; }

        public int EventId { get; set; }
        public Event Event { get; set; }
    }
}
