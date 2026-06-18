package com.cognizant.dsa.ecommercesearch;

import java.util.Arrays;
import java.util.Comparator;

public class Main {

    public static void main(String[] args) {

        Product[] products = {

                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Phone", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Tablet", "Electronics")
        };

        System.out.println("LINEAR SEARCH");

        Product result1 =
                SearchService.linearSearch(products, "Watch");

        if (result1 != null) {
            System.out.println(result1);
        }

        Arrays.sort(products,
                Comparator.comparing(
                        p -> p.productName.toLowerCase()));

        System.out.println("\nBINARY SEARCH");

        Product result2 =
                SearchService.binarySearch(products, "Watch");

        if (result2 != null) {
            System.out.println(result2);
        }

        System.out.println("\nANALYSIS");

        System.out.println("\nLinear Search:");
        System.out.println("Best Case: O(1)");
        System.out.println("Average Case: O(n)");
        System.out.println("Worst Case: O(n)");

        System.out.println("\nBinary Search:");
        System.out.println("Best Case: O(1)");
        System.out.println("Average Case: O(log n)");
        System.out.println("Worst Case: O(log n)");

        System.out.println("\nConclusion:");
        System.out.println("Binary Search is faster and more suitable");
        System.out.println("for large e-commerce platforms when data is sorted.");
    }
}