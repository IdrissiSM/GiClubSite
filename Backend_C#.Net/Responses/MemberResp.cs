using System;

namespace GiClubSite.Responses
{
    public class MemberResp
    {
        public  bool IsEmailExist { get; set; }
        public  bool IsValidPassword { get; set; }
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Level { get; set; }
        public string Cellule { get; set; }
        public string Role { get; set; }
    }
}
