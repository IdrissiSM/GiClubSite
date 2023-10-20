using GiClubSite.Requests;
using GiClubSite.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace GiClubSite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactMailController : ControllerBase
    {
        public IContactMailService contactMailService { get; set; }
        public ContactMailController(IContactMailService contactMailService)
        {
            this.contactMailService = contactMailService;
        }

        [HttpPost("AddContactMail")]
        public async Task<ActionResult<int>> AddContactMail([FromBody] ContactMailReq contactMailReq)
        {
            int result = await contactMailService.AddContactMail(contactMailReq);

            if (result != 0)
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}
