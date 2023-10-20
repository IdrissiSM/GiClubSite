using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace GiClubSite.Models
{
    public class Member
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MemberId { get; set; }
        public string M_FirstName { get; set; }
        public string M_LastName { get; set; }
        public string M_Email { get; set; }
        public string M_Password { get; set; }
        public string M_Level { get; set; }
        public string M_Cellule { get; set; }
        public string M_Role { get; set; }
        public DateTime? M_CreatedAt { get; set; }
        public DateTime? M_DeletedAt { get; set; }
    }
}
