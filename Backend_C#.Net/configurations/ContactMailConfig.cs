using GiClubSite.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GiClubSite.configurations
{
    public class ContactMailConfig : IEntityTypeConfiguration<ContactMail>
    {
        public void Configure(EntityTypeBuilder<ContactMail> builder)
        {
            builder.Property(e => e.ContactMailId).ValueGeneratedOnAdd();
        }
    }
}
