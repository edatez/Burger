const router = require("express").Router();

const Burger = require ("../models/burger");

router.get("/",(req, res) => {
   Burger.all("*",(results) => {
       console.log(results);
        res.render("index", {
            burgers:results
        });
    });

});

router.post("/api/burgers", (req, res)=> {
    Burger.create (req.body, (results)=>{
        // res.json ({id: results.insertId});

        res.redirect("/");
    });
});

router.put("/api/burgers/:id", (req, res)=>{
    console.log ("PUT:", req.params.id);
    console.log (req.body);
    // update db
    Burger.update(req.body.devoured, req.params,  (results)=>{
    // res.json ({id: results.insertId});
console.log("back put:" , results)
    res.json("done");
});

});


module.exports = router;