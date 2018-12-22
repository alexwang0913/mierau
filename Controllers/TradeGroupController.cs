using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using project.Models;

namespace project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TradeGroupController : ControllerBase
    {
        // GET: api/TradeGroup
        [HttpGet]
        public IEnumerable<TradeGroup> Get()
        {
            List<TradeGroup> tradeGroups = new List<TradeGroup>();
            using (SqlDataReader reader = SqlHelper.ExecuteReader("Select * From [dbo].[tblTradeGroup]", CommandType.Text))
            {
                while (reader.Read())
                {
                    TradeGroup tradeGroup = new TradeGroup();
                    tradeGroup.Id = int.Parse(reader["tradeGroupId"].ToString());
                    tradeGroup.Name = reader["tradeGroupName"].ToString();
                    tradeGroups.Add(tradeGroup);
                }
            }

            return tradeGroups;
        }

        // GET: api/TradeGroup/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/TradeGroup
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/TradeGroup/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
