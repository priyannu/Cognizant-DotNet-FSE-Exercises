package com.cognizant.dsa.ecommercesearch;

public class SearchService {

    /*
     * Linear Search
     *
     * Best Case Time Complexity: O(1)
     * Average Case Time Complexity: O(n)
     * Worst Case Time Complexity: O(n)
     *
     * Space Complexity: O(1)
     *
     * Linear search checks each element one by one
     * until the target product is found.
     */
    public static Product linearSearch(Product[] products, String targetName) {

        for (Product product : products) {

            if (product.productName.equalsIgnoreCase(targetName)) {
                return product;
            }
        }

        return null;
    }

    /*
     * Binary Search
     *
     * Best Case Time Complexity: O(1)
     * Average Case Time Complexity: O(log n)
     * Worst Case Time Complexity: O(log n)
     *
     * Space Complexity: O(1)
     *
     * Binary search works only on sorted data.
     * It repeatedly divides the search space into half.
     */
    public static Product binarySearch(Product[] products, String targetName) {

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {

            int mid = (left + right) / 2;

            int comparison =
                    products[mid].productName.compareToIgnoreCase(targetName);

            if (comparison == 0) {
                return products[mid];
            }

            if (comparison < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return null;
    }
}
