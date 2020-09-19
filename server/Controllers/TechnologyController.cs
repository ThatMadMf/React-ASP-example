using System.Collections.Generic;
using System.Linq;
using CompanyProjects.Data;
using CompanyProjects.Models;
using Microsoft.AspNetCore.Mvc;

namespace CompanyProjects.Controllers
{   
    [Route("api/technologies")]
    [ApiController]
    public class TechnologyController : ControllerBase
    {
        private ApplicationDbContext context;

        public TechnologyController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public ICollection<Technology> GetTechnologies()
        {
            return context.Technologies.ToList();
        }
    }
}