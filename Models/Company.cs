using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project.Models
{
    public class Company
    {
        public int CompanyId { get; set; }
        public String CompanyName { get; set; }
        public int TimezoneId { set; get; }
        public String Website { get; set; }
        public int EmailId { get; set; }
        public String Phone { get; set; }
        public int LanguageId { get; set; }
        public int ThemeId {get;set;}
        public String SystemName { get; set; }
        public String SystemTitle { get; set; }
        public int CountryId { get; set; }
        public List<TradeGroup> TradeGroups { get; set; }

        public String TimeZoneName { get; set; }
        public String LanguageName { get; set; }
        public String CountryName { get; set; }
    }
}
