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
    public class TimeZoneController : ControllerBase
    {
        // GET: api/TimeZone
        [HttpGet]
        public IEnumerable<TimeZone> Get()
        {
            List<TimeZone> timeZones = new List<TimeZone>();

            using (SqlDataReader reader = SqlHelper.ExecuteReader("Select * From [dbo].[tblTimeZone]", CommandType.Text))
            {
                while(reader.Read())
                {
                    TimeZone timeZone = new TimeZone();
                    timeZone.Id = int.Parse(reader["timeZoneId"].ToString());
                    timeZone.ParentId = reader["timeZoneParentId"].ToString() != "" ? int.Parse(reader["timeZoneParentId"].ToString()) : -1;
                    timeZone.ContinentId = int.Parse(reader["continentId"].ToString());
                    timeZone.TimeZoneGmtOffset = int.Parse(reader["timeZoneGMTOffset"].ToString());
                    timeZone.TimeZoneAbrr = reader["timeZoneAbbr"].ToString();
                    timeZone.Description = reader["description"].ToString();

                    timeZones.Add(timeZone);
                }
            }

            return timeZones;
        }

        // GET: api/TimeZone/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/TimeZone
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/TimeZone/5
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
