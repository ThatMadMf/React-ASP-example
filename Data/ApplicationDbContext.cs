using CompanyProjects.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CompanyProjects.Data
{
    public class ApplicationDbContext : IdentityDbContext<IdentityUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Contribution> Contributions { get; set; }
        public DbSet<Employee> CompanyStaff { get; set; }
        public DbSet<Technology> Technologies { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<ProjectTechnology>()
                .HasKey(t => new { t.ProjectId, t.TechnologyId });

            modelBuilder.Entity<ProjectTechnology>()
                .HasOne(pt => pt.Project)
                .WithMany(p => p.ProjectTechnologies)
                .HasForeignKey(pt => pt.ProjectId);

            modelBuilder.Entity<ProjectTechnology>()
                .HasOne(pt => pt.Technology)
                .WithMany(t => t.ProjectTechnologies)
                .HasForeignKey(pt => pt.TechnologyId);
        }
    }
}
