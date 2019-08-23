using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace AjacTester.Models
{
    public class Product:Entity
    {

        [Required]
        public double Price { get; set; }
        [ForeignKey("Category")]
        [Range(1, int.MaxValue)]
        public int CategoryId { get; set; }
        public virtual Category Category { get; set; }
        public string Description { get; set; }
    }
}