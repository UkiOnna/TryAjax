using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AjacTester.Controllers
{
    public class ProductController : Controller
    {
        public ActionResult GetProducts()
        {
            return View();
        }
    }
}