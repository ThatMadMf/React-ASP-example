using CompanyProjects.Models;
using Microsoft.EntityFrameworkCore;

namespace CompanyProjects.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Contribution> Contributions { get; set; }
        public DbSet<Employee> Staff { get; set; }
    }
}
