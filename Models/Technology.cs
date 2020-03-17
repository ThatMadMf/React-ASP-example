using System.Collections.Generic;

namespace CompanyProjects.Models
{
    public class Technology
    {
        public Technology()
        {
        }

        public int TechnologyId { get; set; }
        public string Name { get; set; }
        public ICollection <ProjectTechnology> ProjectTechnologies { get; set; }
    }
}
