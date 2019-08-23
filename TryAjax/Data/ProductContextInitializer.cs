using AjacTester.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AjacTester.Data
{
    public class ProductContextInitializer : CreateDatabaseIfNotExists<ProductContext>
    {
        protected override void Seed(ProductContext db)
        {
            Category category = new Category {  Name = "Овощи" };
            Category category1 = new Category {  Name = "Фрукты" };
            Category category2 = new Category { Name = "Сладости" };
            db.Categories.Add(category);
            db.Categories.Add(category1);
            db.Categories.Add(category2);
            Product product = new Product { Id = 1, Name = "Морковь", Price = 70,CategoryId=1,Description="NIIIICE" };
            Product product1 = new Product { Id = 2, Name = "Яблоки", Price = 220, CategoryId = 2, Description = "NIIIICE" };
            Product product2 = new Product { Id = 3, Name = "Шоколад", Price = 400, CategoryId = 3, Description = "NIIIICE" };
            db.Products.Add(product);
            db.Products.Add(product1);
            db.Products.Add(product2);
            db.SaveChanges();
        }
    }
}