using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CompanyProjects.Models
{
    public class Employee
    {
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string SecondName { get; set; }
        public ICollection<Contribution> Contributions { get; set; }
        private ICollection<ProjectEmployee> ProjectEmployees { get; set; }
    }
}
