using System;
using System.Runtime.Serialization;

namespace CompanyProjects.Exceptions
{
    [Serializable]
    internal class RecordWithIdNotExist : Exception
    {
        public RecordWithIdNotExist()
        {
        }

        public RecordWithIdNotExist(string message) : base(message)
        {
        }

        public RecordWithIdNotExist(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected RecordWithIdNotExist(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
