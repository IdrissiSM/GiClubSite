using GiClubSite.Requests;
using System.Threading.Tasks;

namespace GiClubSite.Services
{
    public interface IContactMailService
    {
        Task<int> AddContactMail(ContactMailReq contactMailReq);
    }
}
