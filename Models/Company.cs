using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project.Models
{
    public class Company
    {
        public int COMPANY_ID { get; set; }
        public String COMPANY_NAME { get; set; }
        public int TIMEZONE_ID { set; get; }
        public String WEBSITE { get; set; }
        public int EMAIL_ID { get; set; }
        public String PHONE { get; set; }
        public int LANGUAGE_ID { get; set; }
        public int THEME_ID {get;set;}
        public String SYSTEM_NAME { get; set; }
        public String SYSTEM_TITME { get; set; }
    }
}
