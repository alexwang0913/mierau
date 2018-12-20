using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/User
        [HttpPost]
        [Route("api/User/Login")]
        public bool Login(LoginInfo loginInfo)
        {
            String commandText = "Select * From [dbo].[tblUser] Where userName=@userName And userPassword=@userPassword";
            SqlParameter[] sqlParameters =
            {
                new SqlParameter("@userName", loginInfo.USERE_NAME),
                new SqlParameter("@password", loginInfo.PASSWORD)
            };
            if (SqlHelper.ExecuteNonQuery(commandText, CommandType.Text, sqlParameters) > 0)
            {
                return true;
            }
            return false;
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

    public class LoginInfo
    {
        public String USERE_NAME;
        public String PASSWORD;
    }
}
