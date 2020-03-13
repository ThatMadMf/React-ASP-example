using CompanyProjects.Exceptions;
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

        [HttpGet("{id}")]
        public ActionResult<Contribution> GetContributionById(int id)
        {
            try
            {
                return contributionService.FindContributionById(id);
            }
            catch(RecordWithIdNotExists e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public ActionResult<Contribution> AddContribution(Contribution contribution)
        {
            try
            {
                return contributionService.AddContribution(contribution);
            }
            catch (NotExistingForeignKeyException e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}")]
        public ActionResult<Contribution> MarkAsFinished(int id) {
            try
            {
                return contributionService.MarkAsFinished(id);
            }
            catch (FieldAlreadyWasSetException e)
            {
                return BadRequest(e.Message);
            } 
        }
    }
}
