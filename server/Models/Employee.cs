using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CompanyProjects.Models
{
    public class Employee
    {
        public Employee()
        {
            Projects = new List<Project>();
        }
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string SecondName { get; set; }
        public ICollection<Contribution> Contributions { get; set; }
        public virtual ICollection<Project> Projects { get; set; }
    }
}
