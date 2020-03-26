using System.Collections.Generic;
using System.Linq;
using System.Net;
using CompanyProjects.Exceptions;
using CompanyProjects.Models;
using CompanyProjects.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CompanyProjects.Controllers
{
    [Authorize]
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
        public IEnumerable<Project> GetTasks()
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

        [HttpGet("{id}/technologies")]
        public ICollection<string> GetProjectTechnologies(int id) 
        {
            return projectService.GetProjectTechnologies(id).Select(t => t.Name).ToHashSet();
        }

        [HttpGet("{id}/staff")]
        public ICollection<Employee> GetProjectActiveStaff(int id)
        {
            return projectService.GetProjectActiveStaff(id);
        } 

        [HttpPost]
        public ActionResult<Project> AddProject(Project project)
        {
            return projectService.SaveProject(project);
        }

        [HttpPost("{id}/pick-staff")]
        public ActionResult<Project> PickStaff(int id)
        {
            return projectService.PickStaff(id);
        }

        [HttpDelete("{id}/staff/{employeeId}")]
        public ActionResult<Project> RemoveEmployeeFromProject(int id, int employeeId)
        {
            try {
            return projectService.RemoveEmployee(id, employeeId);
            } catch (RecordWithIdNotExists e) {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        public void DeleteProject(int id)
        {
            projectService.RemoveProject(id);
            Response.StatusCode = (int)HttpStatusCode.NoContent;
        }
    }
}
