using GiClubSite.Context;
using GiClubSite.Models;
using GiClubSite.Requests;
using System.Threading.Tasks;

namespace GiClubSite.Services
{
    public class ContactMailService : IContactMailService
    {
        public GiClubSiteContext Context { get; set; }
        public ContactMailService(GiClubSiteContext context)
        {
            Context = context;
        }
        public async Task<int> AddContactMail(ContactMailReq contactMailReq)
        {
            int res = 0;
            using var transaction =  Context.Database.BeginTransaction();
            try
            {
                var newContactMail = new ContactMail()
                {
                    CM_Name = contactMailReq.Name,
                    CM_Email = contactMailReq.Email,
                    CM_University = contactMailReq.University,
                    CM_Phone = contactMailReq.Phone,
                    CM_Message = contactMailReq.Message,
                    CM_SendTime = System.DateTime.Now
                };
                Context.ContactMail.Add(newContactMail);
                res = await Context.SaveChangesAsync();
                if (res > 0)
                {
                    transaction.Commit();
                }
                return res;
            }
            catch
            {
                await transaction.RollbackAsync();
                return res;
            }
        }
    }
}
