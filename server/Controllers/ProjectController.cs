using System.Collections.Generic;
using System.Linq;
using System.Net;
using CompanyProjects.Exceptions;
using CompanyProjects.Models;
using CompanyProjects.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace CompanyProjects.Controllers
{

    [Route("api/projects")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly ProjectService projectService;

        public ProjectController(ProjectService projectService)
        {
            this.projectService = projectService;
        }

        [HttpGet]
        public IEnumerable<Project> GetProjects()
        {
            return projectService.GetAll();
        }

        [HttpGet("{id}")]
        public ActionResult<Project> GetTaskById(int id)
        {
            return projectService.GetProjectById(id);
        }

        [HttpGet("{id}/contributions")]
        public ICollection<Contribution> GetContributions(int id)
        {
            return projectService.GetContributions(id);
        }

        [HttpPost("{id}/employees")]
        public Employee AddToProject(int id, NewEmployeeDto employeeDto)
        {
            return projectService.AddToProject(id, employeeDto);
        }

        [HttpPost("{id}/contributions")]
        public Contribution AddContribution(int id, Contribution contribution)
        {
            return projectService.AddContribution(id, contribution);
        }

        [HttpGet("{id}/technologies")]
        public ICollection<Technology> GetProjectTechnologies(int id)
        {
            return projectService.GetProjectTechnologies(id);
        }

        [HttpGet("{id}/employees")]
        public ICollection<Employee> GetProjectActiveStaff(int id)
        {
            return projectService.GetProjectActiveStaff(id);
        }

        [HttpPost]
        public ActionResult<Project> AddProject(Project project)
        {
            return projectService.SaveProject(project);
        }

        // [HttpPost("{id}/pick-staff")]
        // public ActionResult<Project> PickStaff(int id, int amount)
        // {
        //     return projectService.PickStaff(id, amount);
        // }

        // [HttpDelete("{id}/staff/{employeeId}")]
        // public ActionResult<Project> RemoveEmployeeFromProject(int id, int employeeId)
        // {
        //     try
        //     {
        //         return projectService.RemoveEmployee(id, employeeId);
        //     }
        //     catch (RecordWithIdNotExists e)
        //     {
        //         return BadRequest(e.Message);
        //     }
        // }

        // [HttpDelete("{id}")]
        // public void DeleteProject(int id)
        // {
        //     projectService.RemoveProject(id);
        //     Response.StatusCode = (int)HttpStatusCode.NoContent;
        // }
    }
}
