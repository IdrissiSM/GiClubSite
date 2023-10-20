namespace GiClubSite.Requests
{
    public class ChangePasswdReq
    {
        public int Id { get; set; }
        public string NewPassword { get; set; } 
        public string OldPassword { get; set; }
    }
}
