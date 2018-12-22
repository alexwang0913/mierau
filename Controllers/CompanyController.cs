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

        //GET: api/Company/5
        [HttpGet("{id}")]
        public Company Get(int id)
        {
            String commandText = "";

            commandText += "SELECT A.*, B.description as timeZoneName, C.languageName, D.description AS countryName, E.tradeGroupIds";
            
            commandText += " FROM [dbo].[tblCompany] as A";
            commandText += " LEFT JOIN [dbo].[tblTimeZone] as B On A.timeZoneId=B.timeZoneID";
            commandText += " LEFT Join [dbo].[tblLanguage] as C On A.languageId=C.languageId";
            commandText += " LEFT JOIN [dbo].[tblCountry] as D ON A.countryId=D.countryId";
            commandText += " LEFT JOIN (SELECT companyId, dbo.GROUP_CONCAT(tradeGroupId, ',') AS tradeGroupIds from [dbo].[tblCompanyTradeGroupRelations] group by companyId) as E ON A.companyId=E.companyId";
            commandText += " Where A.companyId=@companyId";

            SqlParameter parameter = new SqlParameter("@companyId", id);
            
            using (SqlDataReader reader = SqlHelper.ExecuteReader(commandText, CommandType.Text, parameter))
            {
                if (reader.Read())
                {
                    Company company = new Company();

                    company.CompanyId = int.Parse(reader["companyId"].ToString());
                    company.CompanyName = reader["companyName"].ToString();
                    company.TimezoneId = int.Parse(reader["timeZoneId"].ToString());
                    company.Website = reader["website"].ToString();
                    company.EmailId = int.Parse(reader["emailId"].ToString());
                    company.Phone = reader["phone"].ToString();
                    company.LanguageId = int.Parse(reader["languageId"].ToString());
                    company.ThemeId = int.Parse(reader["themeId"].ToString());
                    company.SystemName = reader["systemName"].ToString();
                    company.SystemTitle = reader["systemTitle"].ToString();
                    company.CountryId = int.Parse(reader["countryId"].ToString());

                    company.TimeZoneName = reader["timeZoneName"].ToString();
                    company.LanguageName = reader["languageName"].ToString();
                    company.CountryName = reader["countryName"].ToString();

                    String[] tradeGroupIds = reader["tradeGroupIds"].ToString().Split(",");
                    List<TradeGroup> tradeGroups = new List<TradeGroup>();
                    for (int i = 0; i < tradeGroupIds.Length; i++)
                    {
                        tradeGroups.Add(new TradeGroup(int.Parse(tradeGroupIds[i]), ""));
                    }
                    company.TradeGroups = tradeGroups;

                    return company;
                }
            }
            return null;
        }
        [HttpPost("[action]")]
        public async Task<ActionResult<bool>> UpdateCompanyInformation(Company company)
        {
            String commandText = "UPDATE [dbo].[tblCompany] SET [companyName]=@companyName, [systemName]=@systemName, [systemTitle]=@systemTitle, [timeZoneId]=@timeZoneId, [languageId]=@languageId, [countryId]=@countryId WHERE [companyId]=@companyId";
            SqlParameter[] parameters = {
                new SqlParameter("@companyId", company.CompanyId),
                new SqlParameter("@companyName", company.CompanyName),
                new SqlParameter("@timeZoneId", company.TimezoneId),
                new SqlParameter("@languageId", company.LanguageId),
                new SqlParameter("@systemName", company.SystemName),
                new SqlParameter("@systemTitle", company.SystemTitle),
                new SqlParameter("@countryId", company.CountryId)
            };

            if (SqlHelper.ExecuteNonQuery(commandText, CommandType.Text, parameters) > 0)
            {
                commandText = "DELETE FROM [dbo].[tblCompanyTradeGroupRelations] WHERE companyId=@companyId";
                if (SqlHelper.ExecuteNonQuery(commandText, CommandType.Text, new SqlParameter("@companyId", company.CompanyId)) < 1)
                {
                    return false;
                }
                for (int i = 0; i < company.TradeGroups.Count; i++)
                {                    
                    commandText = "INSERT INTO [dbo].[tblCompanyTradeGroupRelations] VALUES (@companyId, @tradeGroupId)";
                    SqlParameter[] params_1 = {
                        new SqlParameter("@companyId", company.CompanyId),
                        new SqlParameter("@tradeGroupId", company.TradeGroups[i].Id)
                    };
                    if (SqlHelper.ExecuteNonQuery(commandText, CommandType.Text, params_1) < 1)
                    {
                        return false;
                    }

                }

                return true;
            }

            return false;
        }

        // POST: api/Company
        [HttpPost("{id}")]
        public async Task<ActionResult<bool>> Create(int companyId, [FromBody] Company company)
        {
            String commandText = "";
            SqlParameter[] parameters = {
                new SqlParameter("@companyId", company.CompanyId),
                new SqlParameter("@companyName", company.CompanyName),
                new SqlParameter("@timeZoneId", company.TimezoneId),
                new SqlParameter("@website", company.Website),
                new SqlParameter("@emailId", company.EmailId),
                new SqlParameter("@phone", company.Phone),
                new SqlParameter("@languageId", company.LanguageId),
                new SqlParameter("@themeId", company.ThemeId),
                new SqlParameter("@systemName", company.SystemName),
                new SqlParameter("@systemTitle", company.SystemTitle),
                new SqlParameter("@countryId", company.CountryId)
            };
            using (SqlDataReader reader = SqlHelper.ExecuteReader("SELECT * FROM [dbo].[tblCompany] WHERE companyId=@companyId", CommandType.Text, new SqlParameter("@companyId", companyId)))
            {
                if (reader.Read())
                {
                    commandText = "Update [dbo].[tblCompany] SET companyId=@companyId, companyName=@companyName, timeZoneID=@timeZoneId, webSite=@webSite, emailId=@emailId, phone=@phone, languageId=@languageId, themeId=@themeId, systemName=@systemName, systemTitle=@systemTitle, countryId=@countryId)";
                }
                else
                {
                    commandText = "INSERT INTO [dbo].[tblCompany] VALUES (@companyId, @companyName, @timeZoneId, @webSite, @emailId, @phone, @languageId, @themeId, @systemName, @systemTitle, @countryId)";
                }
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
