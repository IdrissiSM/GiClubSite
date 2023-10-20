using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GiClubSite.Requests;
using GiClubSite.Responses;

namespace GiClubSite.Services
{
    public interface IMemberService
    {
        Task<int> AddMember(MemberReq memberReq);
        Task<MemberResp> Login(LoginReq loginReq);
        Task<ChangePasswdResp> ChangePassword(ChangePasswdReq changePasswdReq);
    }
}

