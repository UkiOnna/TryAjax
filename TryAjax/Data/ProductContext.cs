namespace AjacTester.Data
{
    using AjacTester.Models;
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class ProductContext : DbContext
    {
        public ProductContext()
            : base("name=ProductContext")
        {
            Database.SetInitializer<ProductContext>(new ProductContextInitializer());
        }

        public virtual DbSet<Product> Products { get; set; }
    }
}