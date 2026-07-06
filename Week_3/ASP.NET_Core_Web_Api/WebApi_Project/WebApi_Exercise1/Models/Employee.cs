//namespace WebApi_Exercise1.Models
//{
//    public class Employee
//    {
//        public int Id { get; set; }

//        public string Name { get; set; } = "";

//        public string Department { get; set; } = "";

//        public decimal Salary { get; set; }
//    }
//}

//Starting Exercise 3 



using System;
using System.Collections.Generic;

namespace WebApi_Exercise1.Models
{
    public class Employee
    {
        public int Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public int Salary { get; set; }

        public bool Permanent { get; set; }

        //public Department Department { get; set; }

        //public List<Skill> Skills { get; set; }
        public Department Department { get; set; } = new Department();
        public List<Skill> Skills { get; set; } = new List<Skill>();

        public DateTime DateOfBirth { get; set; }
    }
}