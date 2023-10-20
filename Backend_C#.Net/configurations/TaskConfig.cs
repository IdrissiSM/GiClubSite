using GiClubSite.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GiClubSite.configurations
{
    public class TaskConfig : IEntityTypeConfiguration<Task>
    {
        public void Configure(EntityTypeBuilder<Task> builder)
        {
            builder.Property(e => e.TaskId).ValueGeneratedOnAdd();
        }
    }
}


