$.get("/index/", (req, res) => {
    var images1 = "SELECT images FROM imagesdrinks INNER JOIN cocktails ON imagesdrinks.cocktails_id = cocktails.id WHERE imagesdrinks.id=1";
        
    db.query(images1,  (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Post table created......");
    });
});

$.get("/index/", (req, res) => {
    var ingred1= "SELECT ingredients FROM ingredients INNER JOIN cocktails ON ingredients.cocktails_id = cocktails.id WHERE ingredients.id=1";
        
    db.query(ingred1,  (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Post table created......");
    });
});

$.get("/index/", (req, res) => {
    var method1=  "SELECT method FROM method INNER JOIN cocktails ON method.cocktails_id = cocktails.id WHERE method.id=1";
        
    db.query(method1,  (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Post table created......");
    });
});
