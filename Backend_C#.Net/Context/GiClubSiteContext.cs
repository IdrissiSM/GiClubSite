using System;
using Microsoft.EntityFrameworkCore;
using GiClubSite.Models;

namespace GiClubSite.Context
{
    public class GiClubSiteContext : DbContext
    {
        public GiClubSiteContext(){}
        public GiClubSiteContext(DbContextOptions<GiClubSiteContext> options): base(options){}
        public virtual DbSet<Member> Member { get; set; }
        public virtual DbSet<Event> Event { get; set; }
        public virtual DbSet<EventFile> EventFile { get; set; }
        public virtual DbSet<ContactMail> ContactMail { get; set; }
        public virtual DbSet<Task> Task { get; set; }
    }
}
