using CompanyProjects.Data;
using CompanyProjects.Models;

namespace CompanyProjects.Services
{
    public class ContributionService
    {
        private ApplicationDbContext context;
        public ContributionService(ApplicationDbContext context)
        {
            this.context = context;
        }

        public Contribution AddContribution(Contribution contribution)
        {
            context.Contributions.Add(contribution);

            context.SaveChanges();
            return contribution;
        }
    }
}
