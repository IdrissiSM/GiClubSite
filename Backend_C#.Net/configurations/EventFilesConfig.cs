using GiClubSite.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GiClubSite.configurations
{
    public class EventFilesConfig : IEntityTypeConfiguration<EventFile>
    {
        public void Configure(EntityTypeBuilder<EventFile> builder)
        {
            builder.Property(e => e.EventFileId).ValueGeneratedOnAdd();
            builder.HasOne(e => e.Event).WithMany(e => e.EventFiles).HasForeignKey(e => e.EventId);
        }
    }
}