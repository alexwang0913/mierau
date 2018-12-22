using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project.Models
{
    public class TradeGroup
    {
        public int Id { get; set; }
        public String Name { get; set; }

        public TradeGroup()
        {

        }

        public TradeGroup(int id, String Name)
        {
            this.Id = id;
            this.Name = Name;
        }
    }
}
