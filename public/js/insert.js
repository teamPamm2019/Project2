$(".btn1").on("click", function () {
    var id1 = $(this).attr("id");
    alert(id1);
    // $.get("/index", (data) => {
    //     alert("we have activated userdisplay.js\n");
    //     db.query("SELECT images FROM imagesdrinks INNER JOIN cocktails ON imagesdrinks.cocktails_id = cocktails.id WHERE imagesdrinks.id= 1;", (error, data) => {
    //         console.log('we did a query');
    //         if (error) {
    //             console.log("Error: ", error);
    //             res.send({
    //                 "code": 400,
    //                 "failed": "Error occurred"
    //             });
    //         } else {
    //             console.log("Results: ", data);
    //             res.render('/index', { data: data });
    //         }
    //     });
    // });
});