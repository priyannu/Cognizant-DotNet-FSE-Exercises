using CollectionsLib;
using NUnit.Framework;
using NUnit.Framework.Legacy;
using System.Collections.Generic;
using System.Linq;

namespace CollectionsLib.Tests
{
    [TestFixture]
    public class EmployeeManagerTests
    {
        [Test]
        public void GetEmployees_WhenCalled_ReturnsNoNullEmployees()
        {
            EmployeeManager manager = new EmployeeManager();

            List<Employee> employees = manager.GetEmployees();

            Assert.That(employees, Has.No.Null);
        }

        [Test]
        public void GetEmployees_EmployeeId100Exists_ReturnsTrue()
        {
            EmployeeManager manager = new EmployeeManager();

            bool exists = manager.GetEmployees().Any(e => e.EmpId == 100);

            Assert.That(exists, Is.True);
        }

        [Test]
        public void GetEmployees_WhenCalled_ReturnsUniqueEmployees()
        {
            EmployeeManager manager = new EmployeeManager();

            bool isUnique = manager.GetEmployees()
                                   .Select(e => e.EmpId)
                                   .Distinct()
                                   .Count() == manager.GetEmployees().Count;

            Assert.That(isUnique, Is.True);
        }

        [Test]
        public void GetEmployeesAndPreviousYearsEmployees_WhenCompared_ReturnSameEmployees()
        {
            EmployeeManager manager = new EmployeeManager();

            List<int> allEmployeeIds = manager.GetEmployees().Select(e => e.EmpId).ToList();
            List<int> previousYearEmployeeIds = manager.GetEmployeesWhoJoinedInPreviousYears().Select(e => e.EmpId).ToList();

            CollectionAssert.AreEquivalent(allEmployeeIds, previousYearEmployeeIds);
        }
    }
}