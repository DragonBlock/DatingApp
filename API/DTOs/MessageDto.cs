using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class MessageDto
    {
        public int ID { get; set; }
        public int SenderID { get; set; }
        public string SenderUsername { get; set; }
        public string SenderPhotoURL { get; set; }
        public int RecipientID { get; set; }
        public string RecipientUsername { get; set; }
        public string RecipientPhotoURL { get; set; }
        public string Content { get; set; }
        public DateTime? DateRead { get; set; }
        public DateTime MessageSent { get; set; }
        [JsonIgnore]
        public bool SenderDeleted { get; set; }
        [JsonIgnore]
        public bool RecipientDeleted { get; set; }
    }
}