using GiClubSite.Context;
using GiClubSite.Models;
using GiClubSite.Requests;
using GiClubSite.Responses;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Cryptography;
using System.Text;

namespace GiClubSite.Services
{
    public class MemberService : IMemberService
    {
        public GiClubSiteContext Context { get; set; }

        public MemberService(GiClubSiteContext context)
        {
            Context = context;
        }

        // conversion function md5 hashing
        public static string ComputeMD5(string s)
        {
            StringBuilder sb = new();

            // Initialize a MD5 hash object
            using (MD5 md5 = MD5.Create())
            {
                // Compute the hash of the given string
                byte[] hashValue = md5.ComputeHash(Encoding.UTF8.GetBytes(s));

                // Convert the byte array to string format
                foreach (byte b in hashValue)
                {
                    sb.Append($"{b:X2}");
                }
            }
            return sb.ToString().ToLower();
        }


        public async Task<MemberResp> Login(LoginReq loginReq)
        {
            var memeber = await Context.Member.Where(m => m.M_Email.Equals(loginReq.Email)).FirstOrDefaultAsync();
            if(memeber == null)
            {
                var memberResp = new MemberResp()
                {
                    IsEmailExist = false,
                };
                return memberResp;
            }
            else
            {
                var md5HashedPassword = ComputeMD5(loginReq.Password);
                var member = await Context.Member.Where(m => m.M_Email.Equals(loginReq.Email) && m.M_Password.Equals(md5HashedPassword)).FirstOrDefaultAsync();
                if(member == null)
                {
                    var memberResp = new MemberResp()
                    {
                        IsEmailExist = true,
                        IsValidPassword = false
                    };
                    return memberResp;
                }
                else
                {
                    var memberResp = new MemberResp()
                    {
                        IsEmailExist = true,
                        IsValidPassword = true,
                        Id = member.MemberId,
                        FirstName = member.M_FirstName,
                        LastName = member.M_LastName,
                        Email = member.M_Email,
                        Password = member.M_Password,
                        Level = member.M_Level,
                        Cellule = member.M_Cellule,
                        Role = member.M_Role
                    };
                    return memberResp;
                }
            }
        }

        public async Task<int> AddMember(MemberReq memberReq)
        {
            int res = 0;
            using var transaction = Context.Database.BeginTransaction();
            try
            {
                Member newMember = new Member
                {
                    M_FirstName = memberReq.M_FirstName,
                    M_LastName = memberReq.M_LastName,
                    M_Email = memberReq.M_Email,
                    M_Level = memberReq.M_Level,
                    M_Cellule = memberReq.M_Cellule,
                    M_Role = memberReq.M_Role,
                    M_Password = memberReq.M_Password,
                    M_CreatedAt = DateTime.Now
                };
                Context.Member.Add(newMember);
                res = await Context.SaveChangesAsync();
                if(res > 0)
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

        public async Task<ChangePasswdResp> ChangePassword(ChangePasswdReq changePasswdReq)
        {
            var targetMember = await Context.Member.FindAsync(changePasswdReq.Id);
            if( targetMember != null )
            {
                if (targetMember.M_Password.Equals(ComputeMD5(changePasswdReq.OldPassword)))
                {
                    targetMember.M_Password = ComputeMD5(changePasswdReq.NewPassword);
                    Context.SaveChanges();
                    return new ChangePasswdResp()
                    {
                        IsOldPasswordCorrect = true,
                        IschagedPassword = true
                    };
                }
                else
                {
                    return new ChangePasswdResp()
                    {
                        IsOldPasswordCorrect = false,
                        IschagedPassword = false
                    };
                }
            }
            else
            {
                return new ChangePasswdResp()
                {
                    IschagedPassword = false
                };
            }
        }
    }
}
