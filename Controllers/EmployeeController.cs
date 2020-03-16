using CompanyProjects.Models;
using CompanyProjects.Services;
using Microsoft.AspNetCore.Mvc;

namespace CompanyProjects.Controllers
{
    [Route("api/employee")]
    public class EmployeeController : ControllerBase
    {
        private EmployeeService employeeService;

        public EmployeeController(EmployeeService employeeService)
        {
            this.employeeService = employeeService;
        }

        [HttpPost]
        public ActionResult<Employee> AddEmployee([FromBody] Employee employee) {   
            return employeeService.AddEmployee(employee);
        }
    }
}
