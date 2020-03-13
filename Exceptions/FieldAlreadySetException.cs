using System;

namespace CompanyProjects.Exceptions
{
    public class FieldAlreadyWasSetException : Exception
    {
        public FieldAlreadyWasSetException(string message) : base(message)
        {
        }
    }
}
