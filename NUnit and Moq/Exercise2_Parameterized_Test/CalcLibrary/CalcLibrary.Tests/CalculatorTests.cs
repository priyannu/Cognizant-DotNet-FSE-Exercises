using System;
using NUnit.Framework;
using CalcLibrary;

namespace CalcLibrary.Tests
{
    [TestFixture]
    public class CalculatorTests
    {
        private SimpleCalculator? calculator;

        [SetUp]
        public void Setup()
        {
            calculator = new SimpleCalculator();
        }

        [TearDown]
        public void TearDown()
        {
            calculator = null;
        }

        [Test]
        [TestCase(10, 5, 5)]
        [TestCase(20, 8, 12)]
        [TestCase(15, 15, 0)]
        public void TestSubtraction(double a, double b, double expected)
        {
            double actual = calculator!.Subtraction(a, b);

            Assert.That(actual, Is.EqualTo(expected));
        }

        [Test]
        [TestCase(2, 3, 6)]
        [TestCase(5, 4, 20)]
        [TestCase(10, 0, 0)]
        public void TestMultiplication(double a, double b, double expected)
        {
            double actual = calculator!.Multiplication(a, b);

            Assert.That(actual, Is.EqualTo(expected));
        }

        [Test]
        [TestCase(10, 2, 5)]
        [TestCase(20, 4, 5)]
        [TestCase(9, 3, 3)]
        public void TestDivision(double a, double b, double expected)
        {
            double actual = calculator!.Division(a, b);

            Assert.That(actual, Is.EqualTo(expected));
        }

        [Test]
        public void TestDivisionByZero()
        {
            try
            {
                calculator!.Division(10, 0);

                Assert.Fail("Division by zero");
            }
            catch (ArgumentException ex)
            {
                Assert.That(ex.Message, Is.EqualTo("Second Parameter Can't be Zero"));
                Assert.That(ex.GetType(), Is.EqualTo(typeof(ArgumentException)));
            }
        }

        [Test]
        public void TestAddAndClear()
        {
            double actual = calculator!.Addition(10, 20);

            Assert.That(actual, Is.EqualTo(30));

            calculator.AllClear();

            Assert.That(calculator.GetResult, Is.EqualTo(0));
        }
    }
}