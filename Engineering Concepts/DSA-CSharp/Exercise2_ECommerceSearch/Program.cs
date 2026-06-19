using System;

namespace Exercise2_ECommerceSearch
{
    public class Program
    {
        static void Main(string[] args)
        {

            Product[] products =
            {
                new Product(101,"Laptop","Electronics"),
                new Product(102,"Phone","Electronics"),
                new Product(103,"Shoes","Fashion"),
                new Product(104,"Watch","Accessories"),
                new Product(105,"Tablet","Electronics")
            };


            Console.WriteLine("LINEAR SEARCH");

            Product result1 =
                SearchService.LinearSearch(products,
                                           "Watch");

            if (result1 != null)
                Console.WriteLine(result1);


            Array.Sort(products,
                (a, b) =>
                    a.ProductName.CompareTo(
                        b.ProductName));



            Console.WriteLine("\nBINARY SEARCH");

            Product result2 =
                SearchService.BinarySearch(products,
                                           "Watch");


            if (result2 != null)
                Console.WriteLine(result2);



            Console.WriteLine("\nANALYSIS");

            Console.WriteLine("\nLinear Search:");
            Console.WriteLine("Best Case : O(1)");
            Console.WriteLine("Average Case : O(n)");
            Console.WriteLine("Worst Case : O(n)");



            Console.WriteLine("\nBinary Search:");
            Console.WriteLine("Best Case : O(1)");
            Console.WriteLine("Average Case : O(log n)");
            Console.WriteLine("Worst Case : O(log n)");



            Console.WriteLine("\nConclusion:");

            Console.WriteLine(
                "Binary Search is faster and more suitable");

            Console.WriteLine(
                "for large e-commerce platforms when data is sorted.");

        }
    }
}
