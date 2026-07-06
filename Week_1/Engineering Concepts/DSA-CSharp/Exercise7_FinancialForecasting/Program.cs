using System;

namespace Exercise7_FinancialForecasting
{
    public class Program
    {
        static void Main(string[] args)
        {
            double currentValue = 10000;

            double growthRate = 0.10; // 10%

            int years = 3;

            double futureValue =
                FinancialForecast.PredictFutureValue(

                    currentValue,

                    growthRate,

                    years

                    );


            Console.WriteLine(

                $"Predicted Future Value: Rs. {futureValue:F2}"

                );


            Console.WriteLine("\nANALYSIS");


            Console.WriteLine(

                "Time Complexity : O(n)"

                );


            Console.WriteLine(

                "Space Complexity : O(n)"

                );


            Console.WriteLine(

                "\nOptimization:"

                );


            Console.WriteLine(

                "An iterative approach or direct mathematical formula"

                );


            Console.WriteLine(

                "can be used to avoid recursive call overhead."

                );
        }
    }
}
