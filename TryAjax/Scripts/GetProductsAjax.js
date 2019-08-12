$(document).ready(function () {
    $("button").click(function () {
        $.ajax({
            url: "https://localhost:44350/api/products",
            success: function (result) {
                console.log(result);
                for (let i = 0; i < result.length; i++) {
                    $("#results").append("<div class='product' id=result" + i + ">" + "</div>");
                    $("#result" + i).append("<span>" + result[i].Id + "</span></br>");
                    $("#result" + i).append("<span>" + result[i].Name + "</span></br>");
                    $("#result" + i).append("<span>" + result[i].Price + "</span></br>");
                }
            },
            error: function () {
                $("#results").html("Error");
            }
        });
    });
});
