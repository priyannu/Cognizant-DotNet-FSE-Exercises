using Microsoft.EntityFrameworkCore;
using RetailInventory;

using var context = new InventoryContext();

var products = await context.Products.ToListAsync();

Console.WriteLine("All Products:");
foreach (var p in products)
{
    Console.WriteLine($"{p.Name} - ₹{p.Price}");
}

var product = await context.Products.FindAsync(1);
Console.WriteLine($"\nFound: {product?.Name}");

var expensive = await context.Products.FirstOrDefaultAsync(p => p.Price > 50000);
Console.WriteLine($"Expensive: {expensive?.Name}");