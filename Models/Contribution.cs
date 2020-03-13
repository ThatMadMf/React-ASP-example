using System;
using System.ComponentModel.DataAnnotations;

namespace CompanyProjects.Models
{
    public class Contribution
    {
        public int Id { get; set; }
        public string ContributionDescription { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime FinishDate { get; set; }
        public int ExecutorId { get; set; }
        public int ProjectId { get; set; }
    }
}
