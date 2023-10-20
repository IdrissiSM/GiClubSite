using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace GiClubSite.Models
{
    public class ContactMail
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ContactMailId { get; set; }
        public string CM_Name { get; set; }
        public string CM_Email { get; set; }
        public string CM_University { get; set; }
        public string CM_Phone { get; set; }
        public string CM_Message { get; set; }
        public DateTime CM_SendTime { get; set; }
    }
}
