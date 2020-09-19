using System;

namespace CompanyProjects.Exceptions
{
    public class NotExistingForeignKeyException : Exception
    {
        public NotExistingForeignKeyException(string message) : base(message)
        {
        }
    }
}
