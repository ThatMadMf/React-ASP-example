using System.Collections.Generic;

namespace CompanyProjects.Models
{
    public class Technology
    {
        public Technology()
        {
            Projects = new List<Project>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Project> Projects { get; set; }
    }
}
