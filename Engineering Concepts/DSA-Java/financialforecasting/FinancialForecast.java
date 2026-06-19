package com.cognizant.dsa.financialforecasting;

/*
 * Recursive Financial Forecasting
 *
 * Formula:
 * Future Value = Present Value × (1 + Growth Rate)^Years
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * The function calls itself once for each year
 * until the base condition (years == 0) is reached.
 *
 * Optimization:
 * An iterative approach or direct mathematical
 * formula can reduce recursive call overhead.
 */
public class FinancialForecast {

    public static double predictFutureValue(double currentValue,
                                            double growthRate,
                                            int years) {

        if (years == 0) {
            return currentValue;
        }

        return predictFutureValue(
                currentValue * (1 + growthRate),
                growthRate,
                years - 1
        );
    }
}