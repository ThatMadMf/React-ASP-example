using CompanyProjects.Models;
using CompanyProjects.Services;
using Microsoft.AspNetCore.Mvc;

namespace CompanyProjects.Controllers
{
    [Route("api/contributions")]
    [ApiController]
    public class ContributionController : ControllerBase
    {
        private ContributionService contributionService;

        public ContributionController(ContributionService contributionService)
        {
            this.contributionService = contributionService;
        }

        [HttpPost]
        public Contribution AddContribution(Contribution contribution) {
            return contributionService.AddContribution(contribution);
        }
    }
}
