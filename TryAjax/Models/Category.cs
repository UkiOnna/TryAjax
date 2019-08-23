using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AjacTester.Models
{
    public class Category:Entity
    {
        public virtual IEnumerable<Product> Products { get; set; }
    }
}