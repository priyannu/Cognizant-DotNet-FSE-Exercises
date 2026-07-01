using System;
using NUnit.Framework;
using AccountsManagerLib;

namespace AccountsManagerLib.Tests
{
    [TestFixture]
    public class AccountsManagerTests
    {
        [Test]
        public void ValidateUser_ValidCredentials_ReturnsWelcomeMessage()
        {
            AccountsManager manager = new AccountsManager();

            string actual = manager.ValidateUser("user_11", "secret@user11");

            Assert.That(actual, Is.EqualTo("Welcome user_11!!!"));
        }

        [Test]
        public void ValidateUser_InvalidCredentials_ReturnsInvalidMessage()
        {
            AccountsManager manager = new AccountsManager();

            string actual = manager.ValidateUser("abc", "123");

            Assert.That(actual, Is.EqualTo("Invalid user id/password"));
        }

        [Test]
        public void ValidateUser_EmptyUserId_ThrowsFormatException()
        {
            AccountsManager manager = new AccountsManager();

            Assert.That(
                () => manager.ValidateUser("", "secret@user11"),
                Throws.TypeOf<FormatException>());
        }

        [Test]
        public void ValidateUser_EmptyPassword_ThrowsFormatException()
        {
            AccountsManager manager = new AccountsManager();

            Assert.That(
                () => manager.ValidateUser("user_11", ""),
                Throws.TypeOf<FormatException>());
        }
    }
}