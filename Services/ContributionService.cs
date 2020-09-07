using System;
using System.Collections.Generic;
using System.Linq;
using CompanyProjects.Data;
using CompanyProjects.Exceptions;
using CompanyProjects.Models;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

namespace CompanyProjects.Services
{
    public class ContributionService
    {
        private ApplicationDbContext context;
        private EmployeeService employeeService;
        public ContributionService(ApplicationDbContext context, EmployeeService employeeService)
        {
            this.employeeService = employeeService;
            this.context = context;
        }

        public Contribution FindContributionById(int id)
        {
            Contribution contribution = context.Contributions.Find(id);
            if(contribution == null) {
                throw new RecordWithIdNotExists("Contribution with this id does not exist");
            }
            return contribution;
        }

        internal ICollection<Contribution> GetContributionsByTechnology(int id)
        {
            return context.Contributions.Where(c => c.TechnologyId == id).ToList();
        }

        public Contribution AddContribution(Contribution contribution)
        {
            if (contribution.StartDate == null)
            {
                contribution.StartDate = DateTime.Now;
            }
            if(contribution.ProjectId != employeeService.GetEmployeeById(contribution.EmployeeId).ProjectId) {
                throw new NotExistingForeignKeyException("Employee can not contribute to the project");
            }
            try
            {
                context.Contributions.Add(contribution);
                context.SaveChanges();
                return contribution;
            }
            catch (DbUpdateException)
            {
                throw new NotExistingForeignKeyException("Not existing id was passed");
            }
        }

        public Contribution MarkAsFinished(int id)
        {
            Contribution contribution = FindContributionById(id);

            if (contribution.FinishDate != null)
            {
                throw new FieldAlreadyWasSetException("Finish date has been set already");
            }
            contribution.FinishDate = DateTime.Now;

            context.SaveChanges();
            return contribution;
        }

        public ICollection<Contribution> GetContributions()
        {
            return context.Contributions.ToList();
        } 
    }
}
