using System;
using System.ComponentModel.DataAnnotations;

namespace CompanyProjects.Models
{
    public class Contribution
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public Nullable<DateTime> StartDate { get; set; }
        public Nullable<DateTime> FinishDate { get; set; }
        public int ExecutorId { get; set; }
        public int ProjectId { get; set; }
    }
}
