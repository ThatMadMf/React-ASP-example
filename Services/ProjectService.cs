using System.Collections.Generic;
using System.Linq;
using CompanyProjects.Data;
using CompanyProjects.Models;
using Microsoft.EntityFrameworkCore;

namespace CompanyProjects.Services
{
    public class ProjectService
    {
        private ApplicationDbContext context;

        public ProjectService(ApplicationDbContext context)
        {
            this.context = context;
        }

        public List<Project> GetAll()
        {
            return context.Projects.ToList();
        }

        public Project GetProjectById(int id)
        {
            return context.Projects.Where(p => p.Id == id).Include(p => p.Contributions).First();

        }

        public Project SaveProject(Project project)
        {
            context.Projects.Add(project);

            context.SaveChanges();
            return project;
        }

        public Project ChangeProjectName(int id, Project project)
        {
            Project projectToChange = GetProjectById(id);
            projectToChange.Name = project.Name;

            context.SaveChanges();
            return projectToChange;
        }

        public void RemoveProject(int id)
        {
            Project projectToRemove = GetProjectById(id);
            context.Remove(projectToRemove);

            context.SaveChanges();
        }
    }
}
