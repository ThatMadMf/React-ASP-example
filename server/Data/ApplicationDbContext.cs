using CompanyProjects.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace CompanyProjects.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Contribution> Contributions { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Technology> Technologies { get; set; }

    }
}
