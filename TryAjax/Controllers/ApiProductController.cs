using AjacTester.Data;
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

        [Route("")]
        [HttpGet]
        public IHttpActionResult GetProducts()
        {
            return Json(db.Products.ToList());
        }
    }
}
