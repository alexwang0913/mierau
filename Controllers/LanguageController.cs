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
    public class LanguageController : ControllerBase
    {
        // GET: api/Language
        [HttpGet]
        public IEnumerable<Language> Get()
        {
            List<Language> languages = new List<Language>();

            using (SqlDataReader reader = SqlHelper.ExecuteReader("Select * From [dbo].[tblLanguage]", CommandType.Text))
            {
                while (reader.Read())
                {
                    Language language = new Language();
                    language.Id = int.Parse(reader["languageId"].ToString());
                    language.Name = reader["languageName"].ToString();

                    languages.Add(language);
                }
            }

            return languages;
        }

        // GET: api/Language/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Language
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Language/5
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
