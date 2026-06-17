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
    }
}