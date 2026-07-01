using System;
using NUnit.Framework;
using UtilLib;

namespace UtilLib.Tests
{
    [TestFixture]
    public class UrlHostNameParserTests
    {
        [Test]
        public void ParseHostName_ValidHttpUrl_ReturnsHostName()
        {
            // Arrange
            UrlHostNameParser parser = new UrlHostNameParser();

            // Act
            string actual = parser.ParseHostName("http://www.google.com/search");

            // Assert
            Assert.That(actual, Is.EqualTo("www.google.com"));
        }

        [Test]
        public void ParseHostName_InvalidProtocol_ThrowsFormatException()
        {
            // Arrange
            UrlHostNameParser parser = new UrlHostNameParser();

            // Act & Assert
            FormatException ex = Assert.Throws<FormatException>(() =>
                parser.ParseHostName("ftp://www.google.com"));

            Assert.That(ex.Message, Is.EqualTo("Url is not in correct format"));
        }
    }
}