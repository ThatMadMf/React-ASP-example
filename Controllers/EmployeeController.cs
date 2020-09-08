using System.Collections.Generic;
using CompanyProjects.Models;
using CompanyProjects.Services;
using Microsoft.AspNetCore.Mvc;

namespace CompanyProjects.Controllers
{
    [Route("api/employees")]
    public class EmployeeController : ControllerBase
    {
        private EmployeeService employeeService;

        public EmployeeController(EmployeeService employeeService)
        {
            this.employeeService = employeeService;
        }

        [HttpGet]
        public ICollection<Employee> GetAllCompanyStaff()
        {
            return employeeService.GetCompanyStaff();
        }

        [HttpGet("free")]
        public ICollection<Employee> GetFreeStaff()
        {
            return employeeService.GetFreeStaff();
        }

        [HttpPost]
        public ActionResult<Employee> AddEmployee([FromBody] Employee employee)
        {
            return employeeService.AddEmployee(employee);
        }

        [HttpGet("{id}/contributions")]
        public ICollection<Contribution> GetContributions(int id)
        {
            return employeeService.GetAllEmployeeContributions(id);
        }

        [HttpGet("{id}/technologies")]
        public ICollection<Technology> GetTechnologies(int id)
        {
            return employeeService.GetTechnologies(id);
        }
    }
}
