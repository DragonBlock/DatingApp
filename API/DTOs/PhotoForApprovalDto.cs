using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class PhotoForApprovalDto
    {
        public int ID { get; set; }
        public string Username { get; set; }
        public string URL { get; set; }
        public bool IsApproved { get; set; }
    }
}