using System.Collections.Generic;
using System.Linq;
using CompanyProjects.Data;
using CompanyProjects.Exceptions;
using CompanyProjects.Models;
using System;
using Microsoft.EntityFrameworkCore;

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
            return context.Employees.ToList();
        }

        internal Employee GetEmployee(int id)
        {
            var temp = context.Employees.Where(e => e.Id == id).First();

            return context.Employees.Where(e => e.Id == id)
                .Include(e => e.Contributions)
                .Include(e => e.Projects)
                .First();   
        }

        public ICollection<Employee> GetFreeStaff()
        {
            return context.Employees
             .Include(e => e.Projects)
             .Where(e => e.Projects.Count == 0).ToList();
        }
        public Employee AddEmployee(Employee employee)
        {
            context.Employees.Add(employee);

            context.SaveChanges();
            return employee;
        }

        public ICollection<Contribution> GetAllEmployeeContributions(int id)
        {
            return context.Employees.Where(e => e.Id == id)
                .Include(e => e.Contributions)
                .First().Contributions.ToList();
        }
        public ICollection<Technology> GetTechnologies(int id)
        {
            return GetAllEmployeeContributions(id)
                .Select(c => c.TechnologyId)
                .Select(id => context.Technologies.Find(id))
                .ToHashSet();
        }

        // public KeyValuePair<Employee, int> GetMatchingEmployee(ICollection<Technology> technologies, int id)
        // {
        //     return new KeyValuePair<Employee, int>(
        //         GetEmployeeById(id),
        //         GetEmployeeUsedTechnologies(id)
        //         .Intersect(technologies.Select(t => t.TechnologyId)).Count()
        //     );
        // }
        // public ICollection<Employee> PickEmployees(ICollection<Technology> technologies, int amount)
        // {
        //     return GetFreeStaff().Select(e => GetMatchingEmployee(technologies, e.Id))
        //     .OrderByDescending(kv => kv.Value)
        //     .Select(kv => kv.Key)
        //     .Take(amount).ToList();
        // }
    }
}
