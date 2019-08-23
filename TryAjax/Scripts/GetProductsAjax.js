function deleteItemSet(id) {
    $.ajax({
        url: "https://localhost:44350/api/products" + "/deleteItem/" + id,
        type: "DELETE",
        success: function (result) {
            clearContent();
            console.log(result);
            $("#getAllItems").click();
        },
        error: function () {
            $("#content").html("Ошибка");
        }
    });
}

function deleteItemGet() {
    $("#content").append("<span>" + "Id: " + "</span>");
    $("#content").append("<input id='itemId' type ='text' value =''/>" + "</br>");
    $("#content").append("<input id='itemEdit" + "' type='button' value='Удалить'/>");
    $("#itemEdit").click(function () {
        deleteItemSet(document.getElementById("itemId").value);
    });
}

function addItemSet(product) {
    $.ajax({
        url: "https://localhost:44350/api/products" + "/addItem",
        type: "POST",
        data: product,
        success: function (result) {
            clearContent();
            console.log(result);
            $("#getAllItems").click();
        },
        error: function () {
            $("#content").html("Ошибка");
        }
    });
}

function addItemGet() {

    $("#content").append("<span>" + "Имя: " + "</span>");
    $("#content").append("<input id='itemName' type ='text' value =''/>" + "</br>");

    $("#content").append("<span>" + "Категория: " + "</span>");
    $("#content").append("<input id='itemCategoryId' type ='text' value =''/>" + "</br>");

    $("#content").append("<span>" + "Цена: " + "</span>");
    $("#content").append("<input id='itemPrice' type ='number' value =''/>" + "</br>");

    $("#content").append("<span>" + "Описание: " + "</span>");
    $("#content").append("<input id='itemDescription' type ='text' value =''/>" + "</br>");

    $("#content").append("<input id='itemAdd" + "' type='button' value='Добавить'/>");
    $("#itemAdd").click(function () {
        var product = {};
        let name = document.getElementById("itemName").value;
        product.Name = name;
        let categoryId = document.getElementById("itemCategoryId").value;
        product.CategoryId = categoryId;
        let price = document.getElementById("itemPrice").value;
        product.Price = price;
        let description = document.getElementById("itemDescription").value;
        product.Description = description;
        addItemSet(product);
    });
}

function clearItems() {
    console.log("Items очищен");
    $("#items").remove();
    $("#content").append("<div id='items' class='items'></div>");
}


function clearContent() {
    console.log("Content очищен");
    $("#content").remove();
    $("body").append("<div id='content' class='content'></div >");
}

function editItemSet(item) {
    $.ajax({
        url: "https://localhost:44350/api/products" + "/editItem",
        type: "POST",
        data: item,
        success: function (result) {
            clearContent();
            console.log(result);
            getItem("/" + item.Id);
        },
        error: function () {
            $("#content").html("Ошибка");
        }
    });
}

function editItem(url) {
    $.ajax({
        url: "https://localhost:44350/api/products" + "/product" + url,
        success: function (result) {
            clearContent();
            console.log(result);

            $("#content").append("<span>" + result.Id + "</span></br>");

            $("#content").append("<span>" + "Имя: " + "</span>");
            $("#content").append("<input id='itemName' type ='text' value ='" + result.Name + "'/>" + "</br>");

            $("#content").append("<span>" + "Категория: " + "</span>");
            $("#content").append("<input id='itemCategoryId' type ='text' value ='" + result.CategoryId + "'/>" + "</br>");

            $("#content").append("<span>" + "Цена: " + "</span>");
            $("#content").append("<input id='itemPrice' type ='number' value ='" + result.Price + "'/>" + "</br>");

            $("#content").append("<span>" + "Описание: " + "</span>");
            $("#content").append("<input id='itemDescription' type ='text' value ='" + result.Description + "'/>" + "</br>");

            $("#content").append("<input id='itemEdit" + "' type='button' value='Редактировать'/>");
            $("#itemEdit").click(function () {
                var product = result;
                let name = document.getElementById("itemName").value;
                product.Name = name;
                let categoryId = document.getElementById("itemCategoryId").value;
                product.CategoryId = categoryId;
                let price = document.getElementById("itemPrice").value;
                product.Price = price;
                let description = document.getElementById("itemDescription").value;
                product.Description = description;
                editItemSet(product);
            });
        },
        error: function () {
            $("#items").html("Ошибка");
        }
    });
}


function getItem(url) {
    $.ajax({
        url: "https://localhost:44350/api/products" + "/product" + url,
        success: function (result) {
            clearContent();
            console.log(result);
            $("#content").append("<span>" + result.Name + "</span></br>");
            $("#content").append("<span>" + "Категория: " + "</span>");
            $("#content").append("<span>" + result.Category.Name + "</span></br>");
            $("#content").append("<span>" + "Id: " + "</span>");
            $("#content").append("<span>" + result.Id + "</span></br>");
            $("#content").append("<span>" + "Цена: " + "</span>");
            $("#content").append("<span>" + result.Price + "</span></br>");
            $("#content").append("<span>" + "Описание: " + "</span>");
            $("#content").append("<span>" + result.Description + "</span></br>");
            $("#content").append("<input id='itemEdit" + "' type='button' value='Редактировать'/>");
            $("#itemEdit").click(function () {
                editItem("/" + result.Id);
            });
        },
        error: function () {
            $("#items").html("Ошибка");
        }
    });
}



function getItems(urlAppend = "") {
    $.ajax({
        url: "https://localhost:44350/api/products" + urlAppend,
        success: function (result) {
            clearItems();
            console.log(result);
            for (let i = 0; i < result.length; i++) {
                $("#items").append("<div class='item' id=item" + i + ">" + "</div>");

                $("#item" + i).append("<span>" + result[i].Id + "</span></br>");
                $("#item" + i).append("<span>" + result[i].Name + "</span></br>");
                $("#item" + i).append("<span>" + result[i].Price + "</span></br>");
                $("#item" + i).append("<input id='itemView" + i + "' type='button' value='Посмотреть'/>");
                $("#itemView" + i).click(function () {
                    let id = i + 1;
                    getItem("/" + id);
                });
            }
        },
        error: function () {
            $("#items").html("Ошибка");
        }
    });
}

$(document).ready(function () {

    $("#getAllItems").click(function () {
        clearContent();
        itemsInitializer("/0");
    });

    $("#addItem").click(function () {
        clearContent();
        addItemGet();
    });

    $("#removeItem").click(function () {
        clearContent();
        deleteItemGet();
    });
});

function itemsInitializer(urlAppend = "") {
    $("#content").append("<div id='categories' class='categories'></div>");
    getCategories();
    $("#content").append("<div id='items' class='items'></div>");
    getItems(urlAppend);
}

function getCategories() {
    $.ajax({
        url: "https://localhost:44350/api/products" + "/categories",
        success: function (result) {
            console.log(result);
            for (let i = 0; i < result.length + 1; i++) {
                if (i === 0) {
                    $("#categories").append("<input id=category" + i + " type='button' class='categoryButton' value ='Показать все' />");
                }
                else {
                    $("#categories").append("<input id=category" + i + " type='button' class='categoryButton' value ='" + result[i - 1].Name + "' />");
                }
                $("#category" + i).click(function () {
                    getItems("/" + i);
                });
            }
        },
        error: function () {
            $("#categories").html("Ошибка");
        }
    });
}

