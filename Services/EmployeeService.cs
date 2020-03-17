using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using CompanyProjects.Data;
using CompanyProjects.Exceptions;
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

        public ICollection<Employee> GetCompanyStaff()
        {
            return context.CompanyStaff.ToList();
        }
        public Employee GetEmployeeById(int id)
        {
            Employee employee = context.CompanyStaff
            .Where(e => e.Id == id)
            .Include(e => e.Contributions)
            .FirstOrDefault();
            
            if (employee == null)
            {
                throw new RecordWithIdNotExists("Employee with id does not exist");
            }
            return employee;
        }

        public Employee AddEmployee(Employee employee)
        {
            context.CompanyStaff.Add(employee);

            context.SaveChanges();
            return employee;
        }

        public ICollection<Contribution> GetAllEmployeeContributions(int id)
        {
            return GetEmployeeById(id).Contributions.ToList();
        }

        public ICollection<int> GetEmployeeUsedTechnologies(int id)
        {
            return GetAllEmployeeContributions(id).Select(c => c.TechnologyId).Distinct().ToList();
        }

        public KeyValuePair<Employee, int> GetMatchingEmployee(ICollection<Technology> technologies, int id)
        {
            return new KeyValuePair<Employee, int>(
                GetEmployeeById(id),
                GetEmployeeUsedTechnologies(id)
                .Intersect(technologies.Select(t => t.TechnologyId)).Count()
            );
        }
        public ICollection<Employee> PickEmployees(ICollection<Technology> technologies, int amount)
        {
            Dictionary<Employee, int> dictionary = new Dictionary<Employee, int>();
            foreach (Employee employee in GetCompanyStaff())
            {
                var match = GetMatchingEmployee(technologies, employee.Id);
                dictionary.Add(match.Key, match.Value);
            }
            return dictionary.OrderByDescending(kp => kp.Value)
                .Select(kp => kp.Key)
                .Take(amount)
                .ToList();
        }
    }
}
