using System;

namespace CompanyProjects.Models
{
    public class Contribution
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public Nullable<DateTime> StartDate { get; set; }
        public Nullable<DateTime> FinishDate { get; set; }
        public int TechnologyId { get; set; }
        public Technology Technology {get; set;}
        public int EmployeeId { get; set; }
        public Employee Employee {get; set;}
        public int ProjectId { get; set; }
        public Project Project {get; set;}
    }
}
