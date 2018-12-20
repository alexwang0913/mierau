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
    public class CompanyController : ControllerBase
    {
        // GET: api/Company
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET: api/Company/5
        //[HttpGet("{id}", Name = "Get")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST: api/Company
        [HttpPost("{id}")]
        public bool Create(int companyId, [FromBody] Company company)
        {
            String commandText = "";
            SqlParameter[] parameters = {
                new SqlParameter("@companyId", company.COMPANY_ID),
                new SqlParameter("@companyName", company.COMPANY_NAME),
                new SqlParameter("@timeZoneId", company.TIMEZONE_ID),
                new SqlParameter("@website", company.WEBSITE),
                new SqlParameter("@emailId", company.EMAIL_ID),
                new SqlParameter("@phone", company.PHONE),
                new SqlParameter("@languageId", company.LANGUAGE_ID),
                new SqlParameter("@themeId", company.THEME_ID),
                new SqlParameter("@systemName", company.SYSTEM_NAME),
                new SqlParameter("@systemTitle", company.SYSTEM_TITME)
            };
            
            if (SqlHelper.ExecuteNonQuery("SELECT * FROM [dbo].[tblCompany] WHERE companyId=@companyId", CommandType.Text, new SqlParameter("@companyId", companyId)) > 0)
            {
                commandText = "Update [dbo].[tblCountry] SET companyId=@companyId, companyName=@companyName, timeZoneID=@timeZoneId, webSite=@webSite, emailId=@emailId, phone=@phone, languageId=@languageId, themeId=@themeId, systemName=@systemName, systemTitle=@systemTitle)";
            }
            else
            {
                commandText = "INSERT INTO [dbo].[tblCountry] VALUES (@companyId, @companyName, @timeZoneId, @webSite, @emailId, @phone, @languageId, @themeId, @systemName, @systemTitle)";
            }
            if (SqlHelper.ExecuteNonQuery(commandText, CommandType.Text, parameters) > 0)
            {
                return true;
            }
            return false;
            
        }

        // PUT: api/Company/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
        
        [HttpGet("[action]")]
        public IEnumerable<Country> GetCountries()
        {
            List<Country> result = new List<Country>();

            String commandText = "SELECT * FROM [dbo].[tblCountry]";
            using (SqlDataReader reader = SqlHelper.ExecuteReader(commandText,CommandType.Text))
            {
                while (reader.Read())
                {
                    Country country = new Country();
                    country.ID = int.Parse(reader["countryId"].ToString());
                    country.NAME = reader["description"].ToString();
                    result.Add(country);
                }
            }

            return result;
        }
    }
}
