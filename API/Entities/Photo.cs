using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Photos")]
    public class Photo
    {
        public int ID { get; set; }
        public string URL { get; set; }
        public bool IsMain { get; set; }
        public string PublicID { get; set; }
        public AppUser AppUser { get; set; }
        public int AppUserID { get; set; }
    }
}