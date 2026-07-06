package com.cognizant.dsa.financialforecasting;

public class Main {

    public static void main(String[] args) {

        double currentValue = 10000;
        double growthRate = 0.10; // 10%
        int years = 3;

        double futureValue = FinancialForecast.predictFutureValue(
                currentValue,
                growthRate,
                years
        );

        System.out.printf("Predicted Future Value: ₹%.2f%n", futureValue);

        System.out.println("\nANALYSIS");

        System.out.println("Time Complexity: O(n)");
        System.out.println("Space Complexity: O(n)");

        System.out.println("\nOptimization:");
        System.out.println("An iterative approach or direct mathematical formula");
        System.out.println("can be used to avoid recursive call overhead.");
    }
}