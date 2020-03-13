using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CompanyProjects.Models
{
    public class Project
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public ICollection<Contribution> Contributions { get; set; }
    }
}
