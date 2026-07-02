using Moq;
using NUnit.Framework;
using ConverterLib;
using CurrencyConverterApp;

namespace ConverterLib.Tests
{
    [TestFixture]
    public class ConverterTests
    {
        [Test]
        public void USDToEuro_ValidDollarAmount_ReturnsConvertedEuroAmount()
        {
            Mock<IDollarToEuroExchangeRateFeed> mockExchangeRateFeed =
                new Mock<IDollarToEuroExchangeRateFeed>();

            mockExchangeRateFeed
                .Setup(feed => feed.GetActualUSDollarValue())
                .Returns(0.85);

            Converter converter = new Converter(mockExchangeRateFeed.Object);

            double actual = converter.USDToEuro(100);

            Assert.That(actual, Is.EqualTo(85));
        }

        [Test]
        public void USDToEuro_ZeroDollarAmount_ReturnsZero()
        {
            Mock<IDollarToEuroExchangeRateFeed> mockExchangeRateFeed =
                new Mock<IDollarToEuroExchangeRateFeed>();

            mockExchangeRateFeed
                .Setup(feed => feed.GetActualUSDollarValue())
                .Returns(0.85);

            Converter converter = new Converter(mockExchangeRateFeed.Object);

            double actual = converter.USDToEuro(0);

            Assert.That(actual, Is.EqualTo(0));
        }

        [Test]
        public void USDToEuro_DifferentExchangeRate_ReturnsConvertedEuroAmount()
        {
            Mock<IDollarToEuroExchangeRateFeed> mockExchangeRateFeed =
                new Mock<IDollarToEuroExchangeRateFeed>();

            mockExchangeRateFeed
                .Setup(feed => feed.GetActualUSDollarValue())
                .Returns(0.90);

            Converter converter = new Converter(mockExchangeRateFeed.Object);

            double actual = converter.USDToEuro(200);

            Assert.That(actual, Is.EqualTo(180));
        }
    }
}