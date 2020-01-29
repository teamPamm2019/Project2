// When user clicks add-btn
$("#fm1").on("click", function (event) {
    event.preventDefault();

    // Make a new Drink object
    var newDrink = {
        category: $("#cat_name1").val().trim().toLowerCase(),
        drink: $("#drink_name").val().trim().toLowerCase(),
        image: $("#drinkimage_name").val().trim(),
        ingredients: $("#textarea1").val().trim().toLowerCase(),
        method: $("#textarea2").val().trim()
    };
    console.log(newDrink);
    // Send an AJAX POST-request with jQuery
    $.post("/add", newDrink)
        // On success, run the following code
        .then(function (data) {
            // Log the data we found
            console.log(data);
        });

    // Empty each input box by replacing the value with an empty string
    $("#cat_name1").val(""),
        $("#drink_name").val(""),
        $("#drinkimage_name").val(""),
        $("#textarea1").val(""),
        $("#textarea2").val("")

});
