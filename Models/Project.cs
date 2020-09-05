using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CompanyProjects.Models
{
    public class Project
    {
        public Project(){
            ProjectTechnologies = new List<ProjectTechnology>();
        }
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public ICollection<Contribution> Contributions { get; set; }
        public ICollection<Employee> ActiveStaff { get; set; }
        public ICollection <ProjectTechnology> ProjectTechnologies { get; set; }
    }
}
