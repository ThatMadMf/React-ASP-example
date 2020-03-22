using System;
using System.Collections.Generic;
using System.Linq;
using CompanyProjects.Data;
using CompanyProjects.Exceptions;
using CompanyProjects.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CompanyProjects.Services
{
    public class ProjectService
    {
        private ApplicationDbContext context;
        private EmployeeService employeeService;

        public ProjectService(ApplicationDbContext context, EmployeeService employeeService)
        {
            this.context = context;
            this.employeeService = employeeService;
        }

        public List<Project> GetAll()
        {
            return context.Projects.ToList();
        }

        public Project GetProjectById(int id)
        {
            return context.Projects.Where(p => p.Id == id)
            .Include(p => p.Contributions)
            .Include(p => p.ProjectTechnologies)
            .ThenInclude(pt => pt.Technology)
            .Include(p => p.ActiveStaff)
            .FirstOrDefault();
        }

        public ICollection<Technology> GetProjectTechnologies(int id)
        {
            return GetProjectById(id).ProjectTechnologies.Select(pt => pt.Technology).ToHashSet();
        }

        public Project SaveProject(Project project)
        {
            context.Projects.Add(project);

            context.SaveChanges();
            return project;
        }

        internal ICollection<Employee> GetProjectActiveStaff(int id)
        {
            return GetProjectById(id).ActiveStaff;
        }

        internal ICollection<Contribution> GetContributions(int id)
        {
            return GetProjectById(id).Contributions;
        }

        public Project ChangeProjectName(int id, Project project)
        {
            Project projectToChange = GetProjectById(id);
            projectToChange.Name = project.Name;

            context.SaveChanges();
            return projectToChange;
        }

        internal ActionResult<Project> RemoveEmployee(int id, int employeeId)
        {
            Project project = GetProjectById(id);
            Employee employee = project.ActiveStaff
            .Where(emp => emp.ProjectId == id && emp.Id == employeeId)
            .FirstOrDefault();

            if (employee == null)
            {
                throw new RecordWithIdNotExists("Employee not member of this project");
            }
            employee.ProjectId = null;
            context.SaveChanges();
            return GetProjectById(id);
        }

        public void RemoveProject(int id)
        {
            Project projectToRemove = GetProjectById(id);
            context.Remove(projectToRemove);

            context.SaveChanges();
        }

        public Project PickStaff(int id) {
            Project project = GetProjectById(id);
            project.ActiveStaff = employeeService.PickEmployees(GetProjectTechnologies(id), 2);
            project.ActiveStaff.Select(e => e.ProjectId = id);

            context.SaveChanges();
            return project;
        }
    }
}
