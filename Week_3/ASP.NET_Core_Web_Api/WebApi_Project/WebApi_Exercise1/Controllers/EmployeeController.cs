//using Microsoft.AspNetCore.Mvc;
//using WebApi_Exercise1.Models;

//namespace WebApi_Exercise1.Controllers
//{
//    [ApiController]
//    // [Route("api/[controller]")]
//    [Route("api/Emp")]
//    public class EmployeeController : ControllerBase
//    {
//        private static readonly List<Employee> Employees = new()
//        {
//            new Employee { Id = 1, Name = "Annu Priya", Department = "CSE", Salary = 50000 },
//            new Employee { Id = 2, Name = "Rahul Kumar", Department = "IT", Salary = 45000 },
//            new Employee { Id = 3, Name = "Sneha Singh", Department = "HR", Salary = 40000 }
//        };

//        [HttpGet]
//        public ActionResult<IEnumerable<Employee>> Get()
//        {
//            return Ok(Employees);
//        }

//        [HttpGet("{id}")]
//        public ActionResult<Employee> GetById(int id)
//        {
//            var employee = Employees.FirstOrDefault(e => e.Id == id);

//            if (employee == null)
//                return NotFound();

//            return Ok(employee);
//        }

//        [HttpPost]
//        public ActionResult<Employee> Post(Employee employee)
//        {
//            Employees.Add(employee);
//            return Ok(employee);
//        }

//        [HttpPut("{id}")]
//        public IActionResult Put(int id, Employee employee)
//        {
//            var existingEmployee = Employees.FirstOrDefault(e => e.Id == id);

//            if (existingEmployee == null)
//                return NotFound();

//            existingEmployee.Name = employee.Name;
//            existingEmployee.Department = employee.Department;
//            existingEmployee.Salary = employee.Salary;

//            return Ok(existingEmployee);
//        }

//        [HttpDelete("{id}")]
//        public IActionResult Delete(int id)
//        {
//            var employee = Employees.FirstOrDefault(e => e.Id == id);

//            if (employee == null)
//                return NotFound();

//            Employees.Remove(employee);
//            return Ok(employee);
//        }
//    }
//}


//Exercise 3

//using WebApi_Exercise1.Filters;
//using Microsoft.AspNetCore.Mvc;
//using WebApi_Exercise1.Models;

//namespace WebApi_Exercise1.Controllers
//{
//    [ApiController]
//    [Route("api/Emp")]
//    [CustomAuthFilter]
//    public class EmployeeController : ControllerBase
//    {
//        private static readonly List<Employee> Employees = GetStandardEmployeeList();

//        private static List<Employee> GetStandardEmployeeList()
//        {
//            return new List<Employee>
//            {
//                new Employee
//                {
//                    Id = 1,
//                    Name = "Annu Priya",
//                    Salary = 50000,
//                    Permanent = true,
//                    Department = new Department { Id = 1, Name = "CSE" },
//                    Skills = new List<Skill>
//                    {
//                        new Skill { Id = 1, Name = "C#" },
//                        new Skill { Id = 2, Name = "SQL" }
//                    },
//                    DateOfBirth = new DateTime(2004, 5, 10)
//                }
//            };
//        }

//        //[HttpGet]
//        //[ProducesResponseType(StatusCodes.Status200OK)]
//        //public ActionResult<List<Employee>> Get()
//        //{
//        //    return Ok(Employees);
//        //}

//        [HttpGet]
//        [ProducesResponseType(StatusCodes.Status200OK)]
//        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
//        public ActionResult<IEnumerable<Employee>> Get()
//        {
//            throw new Exception("This is a custom exception.");
//        }

//        [HttpPost]
//        public ActionResult<Employee> Post([FromBody] Employee employee)
//        {
//            Employees.Add(employee);
//            return Ok(employee);
//        }

//        [HttpPut("{id}")]
//        public IActionResult Put(int id, [FromBody] Employee employee)
//        {
//            var existingEmployee = Employees.FirstOrDefault(e => e.Id == id);

//            if (existingEmployee == null)
//                return NotFound();

//            existingEmployee.Name = employee.Name;
//            existingEmployee.Salary = employee.Salary;
//            existingEmployee.Permanent = employee.Permanent;
//            existingEmployee.Department = employee.Department;
//            existingEmployee.Skills = employee.Skills;
//            existingEmployee.DateOfBirth = employee.DateOfBirth;

//            return Ok(existingEmployee);
//        }
//    }
//}

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApi_Exercise1.Models;

namespace WebApi_Exercise1.Controllers
{
    [ApiController]
    [Route("api/Emp")]
    //[Authorize]
    //[Authorize(Roles = "POC")]
    [Authorize(Roles = "Admin,POC")]
    public class EmployeeController : ControllerBase
    {
        private static readonly List<Employee> Employees = GetStandardEmployeeList();

        private static List<Employee> GetStandardEmployeeList()
        {
            return new List<Employee>
            {
                new Employee
                {
                    Id = 1,
                    Name = "Annu Priya",
                    Salary = 50000,
                    Permanent = true,
                    Department = new Department
                    {
                        Id = 1,
                        Name = "CSE"
                    },
                    Skills = new List<Skill>
                    {
                        new Skill
                        {
                            Id = 1,
                            Name = "C#"
                        },
                        new Skill
                        {
                            Id = 2,
                            Name = "SQL"
                        }
                    },
                    DateOfBirth = new DateTime(2004, 5, 10)
                }
            };
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<List<Employee>> Get()
        {
            return Ok(Employees);
        }

        [HttpPost]
        public ActionResult<Employee> Post([FromBody] Employee employee)
        {
            Employees.Add(employee);
            return Ok(employee);
        }

        [HttpPut("{id}")]
        public ActionResult<Employee> Put(int id, [FromBody] Employee employee)
        {
            if (id <= 0)
            {
                return BadRequest("Invalid employee id");
            }

            var existingEmployee = Employees.FirstOrDefault(e => e.Id == id);

            if (existingEmployee == null)
            {
                return BadRequest("Invalid employee id");
            }

            existingEmployee.Name = employee.Name;
            existingEmployee.Salary = employee.Salary;
            existingEmployee.Permanent = employee.Permanent;
            existingEmployee.Department = employee.Department;
            existingEmployee.Skills = employee.Skills;
            existingEmployee.DateOfBirth = employee.DateOfBirth;

            return Ok(existingEmployee);
        }
    }
}