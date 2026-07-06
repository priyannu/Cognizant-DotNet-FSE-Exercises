using NUnit.Framework;
using UserManagerLib;

namespace UserManagerLib.Tests
{
    [TestFixture]
    public class UserManagerTests
    {
        private User user;

        [SetUp]
        public void Setup()
        {
            user = new User();
        }

        // Happy Path
        [Test]
        public void CreateUser_ValidPAN_DoesNotThrowException()
        {
            User newUser = new User
            {
                PANCardNo = "ABCDE1234F"
            };

            Assert.That(() => user.CreateUser(newUser), Throws.Nothing);
        }

        // Null PAN
        [Test]
        public void CreateUser_NullPAN_ThrowsNullReferenceException()
        {
            User newUser = new User
            {
                PANCardNo = null
            };

            Assert.That(() => user.CreateUser(newUser),
                Throws.TypeOf<NullReferenceException>());
        }

        // Empty PAN
        [Test]
        public void CreateUser_EmptyPAN_ThrowsNullReferenceException()
        {
            User newUser = new User
            {
                PANCardNo = ""
            };

            Assert.That(() => user.CreateUser(newUser),
                Throws.TypeOf<NullReferenceException>());
        }

        // PAN length not 10
        [Test]
        public void CreateUser_InvalidPANLength_ThrowsFormatException()
        {
            User newUser = new User
            {
                PANCardNo = "ABC123"
            };

            Assert.That(() => user.CreateUser(newUser),
                Throws.TypeOf<FormatException>());
        }
    }
}