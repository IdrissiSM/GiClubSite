using GiClubSite.Requests;
using GiClubSite.Responses;
using GiClubSite.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GiClubSite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MemberController : ControllerBase
    {
        public IMemberService MemberService { get; set; }
        public MemberController(IMemberService memberService)
        {
            MemberService = memberService;
        }
        
        [HttpPost("Login")]
        public async Task<MemberResp> Login(LoginReq loginReq)
        {
            return await MemberService.Login(loginReq);
        }

        [HttpPost("AddMember")]
        public async Task<ActionResult<int>> AddMember([FromForm] MemberReq memberRequest)
        {
            int result = await MemberService.AddMember(memberRequest);

            if (result != 0)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpPost("ChangePassword")]
        public async Task<ChangePasswdResp> ChangePassword(ChangePasswdReq changePasswdReq)
        {
            return await MemberService.ChangePassword(changePasswdReq);
        }
    }
}
