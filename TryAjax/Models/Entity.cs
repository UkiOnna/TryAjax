﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AjacTester.Models
{
    public class Entity
    {
        [Required]
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
    }
}