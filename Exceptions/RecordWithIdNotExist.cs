using System;
using System.Runtime.Serialization;

namespace CompanyProjects.Exceptions
{
    [Serializable]
    internal class RecordWithIdNotExists : Exception
    {
        public RecordWithIdNotExists()
        {
        }

        public RecordWithIdNotExists(string message) : base(message)
        {
        }

        public RecordWithIdNotExists(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected RecordWithIdNotExists(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
