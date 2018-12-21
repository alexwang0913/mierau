using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project.Models
{
    public class TimeZone
    {
        public int Id { get; set; }
        public int ParentId { get; set; }
        public int ContinentId { get; set; }
        public int TimeZoneGmtOffset { get; set; }
        public String TimeZoneAbrr { get; set; }
        public string Description { get; set; }
    }
}
