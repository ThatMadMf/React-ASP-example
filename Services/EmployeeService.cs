using System.Collections.Generic;
using System.Linq;
using CompanyProjects.Data;
using CompanyProjects.Models;

namespace CompanyProjects.Services
{
    public class EmployeeService
    {
        private ApplicationDbContext context;

        public EmployeeService(ApplicationDbContext context)
        {
            this.context = context;
        }

        public ICollection<Employee> GetCompanyStaff() {
            return context.CompanyStaff.ToList(); 
        }
        public Employee GetEmployeeById(int id) {
            return context.CompanyStaff.Where(employee => employee.Id == id).First(); 
        }

        public Employee AddEmployee(Employee employee)
        {
            context.CompanyStaff.Add(employee);
            
            context.SaveChanges();
            return employee;
        }
    }
}
