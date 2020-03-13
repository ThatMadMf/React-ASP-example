using System;
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
        public ContributionService(ApplicationDbContext context)
        {
            this.context = context;
        }

        public Contribution FindContributionById(int id)
        {
            Contribution contribution = context.Contributions.Find(id);
            if(contribution == null) {
                throw new RecordWithIdNotExist("Contribution with this id does not exist");
            }
            return contribution;
        }

        public Contribution AddContribution(Contribution contribution)
        {
            if (contribution.StartDate == null)
            {
                contribution.StartDate = DateTime.Now;
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
    }
}
