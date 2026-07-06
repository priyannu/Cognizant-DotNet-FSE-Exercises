using System;

namespace Exercise2_ECommerceSearch
{
    public class SearchService
    {

        /*
         * Linear Search
         *
         * Best Case Time Complexity : O(1)
         * Average Case Time Complexity : O(n)
         * Worst Case Time Complexity : O(n)
         *
         * Space Complexity : O(1)
         *
         * Linear search checks each element
         * one by one until the target product is found.
         */

        public static Product LinearSearch(Product[] products,
                                           string targetName)
        {
            foreach (Product product in products)
            {
                if (product.ProductName.Equals(
                        targetName,
                        StringComparison.OrdinalIgnoreCase))
                {
                    return product;
                }
            }

            return null;
        }


        /*
         * Binary Search
         *
         * Best Case Time Complexity : O(1)
         * Average Case Time Complexity : O(log n)
         * Worst Case Time Complexity : O(log n)
         *
         * Space Complexity : O(1)
         *
         * Binary search works only on sorted data.
         * It repeatedly divides the search space into half.
         */

        public static Product BinarySearch(Product[] products,
                                           string targetName)
        {
            int left = 0;
            int right = products.Length - 1;

            while (left <= right)
            {
                int mid = (left + right) / 2;

                int comparison =
                    string.Compare(
                        products[mid].ProductName,
                        targetName,
                        StringComparison.OrdinalIgnoreCase);

                if (comparison == 0)
                    return products[mid];

                if (comparison < 0)
                    left = mid + 1;
                else
                    right = mid - 1;
            }

            return null;
        }
    }
}