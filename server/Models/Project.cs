using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CompanyProjects.Models
{
    public class Project
    {
        public Project()
        {
            Technologies = new HashSet<Technology>();
            Employees = new HashSet<Employee>();
            Contributions = new HashSet<Contribution>();
        }

        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public virtual ICollection<Contribution> Contributions { get; set; }
        public virtual ICollection<Technology> Technologies { get; set; }
        public virtual ICollection<Employee> Employees { get; set; }
    }
}
