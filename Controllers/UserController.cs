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
    public class UserController : ControllerBase
    {
        // GET: api/User
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/User/5
        //[HttpGet("{id}", Name = "Get")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST: api/User
        [HttpPost]
        public async Task<ActionResult<User>> Login(LoginInfo loginInfo)
        {
            String commandText = "Select * From [dbo].[tblUser] Where userName=@userName And userPassword=@password";
            SqlParameter[] sqlParameters =
            {
                new SqlParameter("@userName", loginInfo.UserName),
                new SqlParameter("@password", loginInfo.Password)
            };
            using (SqlDataReader reader = SqlHelper.ExecuteReader(commandText, CommandType.Text, sqlParameters))
            {
                if (reader.Read())
                {
                    User user = new User();
                    user.Id = int.Parse(reader["userID"].ToString());
                    user.UserName = reader["userName"].ToString();
                    user.CompanyId = int.Parse(reader["headOfficeID"].ToString());

                    return user;
                }
            }
            return null;
        }

        // PUT: api/User/5
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
