using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace GiClubSite.Models
{
    public class Task
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TaskId { get; set; }
        public string T_Title { get; set; }
        public string T_Description { get; set; }
        public string T_Status { get; set; }
        public string T_Notification { get; set; }
        public string T_Cell { get; set; }
        public DateTime? T_CreatedAt { get; set; }
        public DateTime? T_DeletedAt { get; set; }
    }
}
