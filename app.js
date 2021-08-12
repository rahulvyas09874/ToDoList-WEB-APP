//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


var items= ["Go for a morning run", "Have Healthy Breakfast", "Do DSA"];
let workitems=[];


app.get("/", function(req, res){


var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var currdate = new Date();

  res.render("list", {aajkadin: currdate.toLocaleDateString("en-US", options), newitem: items });

});
app.post("/", function(req, res){
    let item= req.body.task;
    if(req.body.List==="Work"){
      workitems.push(item);
      res.redirect("/Work");
    }
    else{
      items.push(item);
      res.redirect("/");
    }

});

app.get("/Work", function(req,res){
  res.render("list",{aajkadin: "Work List", newitem: workitems});
});

app.post("/Work", function(req,res){
  // let inputitem =req.body.task;
  // workitems.push(inputitem);
  // res.redirect("/Work");
});

app.get("/about", function(req,res){
  res.render("about");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on port 3000.");
});
