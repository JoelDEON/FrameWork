const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")
const app = express();

let items = ["open the computer", "check the emails", "report the issues"];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {

  let day = date.getDates();

  res.render("list", {
    listTitle: day,
    newListItems: items
  });
});
//Add task's---------------------
app.post("/", function(req, res) {
  const item = req.body.newItem;
  if (req.body.list === "work") {
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", {listTitle:"work list", newListItems: workItems});
});

app.post("/work", function (req, res) {
const item = req.body.newItem;
workItem.push(item);
res.redirect("/work");
});

app.get("/about", function (req, res) {
res.render("about");
});

app.listen(3000, function() {
  console.log("I am running Boss!");
});
