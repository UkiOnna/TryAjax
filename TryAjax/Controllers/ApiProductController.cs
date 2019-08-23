using AjacTester.Data;
using AjacTester.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AjacTester.Controllers
{
    [RoutePrefix("api/products")]
    public class ApiProductController : ApiController
    {
        private ProductContext db = new ProductContext();

        [Route("{id}")]
        [HttpGet]
        public IHttpActionResult GetProducts(int id)
        {
            if (id == 0)
            {
                return Json(db.Products.ToList());
            }
            else
            {
                Category category = db.Categories.FirstOrDefault(c => c.Id == id);
                if (category != null)
                {
                    return Json(db.Products.Where(p => p.CategoryId == id));
                }
            }
            return null;
        }

        [Route("product/{id}")]
        [HttpGet]
        public IHttpActionResult GetProduct(int id)
        {
            Product product = db.Products.FirstOrDefault(p => p.Id == id);
            return Json(product);
        }
        [Route("deleteItem/{id}")]
        [HttpDelete]
        public IHttpActionResult DeleteProduct(int id)
        {
            Product product = db.Products.FirstOrDefault(p => p.Id == id);
            if (product != null)
            {
                db.Products.Remove(product);
                db.SaveChanges();
                return Ok();
            }
            return BadRequest();
        }
        [Route("addItem")]
        [HttpPost]
        public IHttpActionResult AddProduct(Product product)
        {
            db.Products.Add(product);
            db.SaveChanges();
            return Ok();
        }
        [Route("editItem")]
        [HttpPost]
        public IHttpActionResult EditProduct([FromBody]Product item)
        {
            Product result = db.Products.FirstOrDefault(p => p.Id == item.Id);
            result.Name = item.Name;
            result.CategoryId = item.CategoryId;
            result.Price = item.Price;
            result.Description = item.Description;
            db.SaveChanges();
            return Ok();
        }
        [Route("categories")]
        [HttpGet]
        public IHttpActionResult GetCategories()
        {
            return Json(db.Categories.ToList());
        }

    }
}

