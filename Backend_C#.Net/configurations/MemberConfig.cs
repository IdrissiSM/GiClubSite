using GiClubSite.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GiClubSite.configurations
{
    public class MemberConfig : IEntityTypeConfiguration<Member>
    {
        public void Configure(EntityTypeBuilder<Member> builder)
        {
            builder.Property(e => e.MemberId).ValueGeneratedOnAdd();
        }
    }
}

