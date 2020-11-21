const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
  const firstName = req.body.FName;
  const lastName = req.body.LName;
  const qid = req.body.Qid;
  const email = req.body.Email;
  const data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        QID: qid
      }
    }]
  }
  const jsonData = JSON.stringify(data);
  const url = "https://us2.api.mailchimp.com/3.0/lists/613b1182fe";
  const options = {
    method: "POST",
    auth: "joel:2a9688d77a9862a838fe7fc100a001cb-us2"
  }
  const request = https.request(url, options, function(response) {
    if(response.statusCode === 200){
      res.sendFile(__dirname + "/success.html");
    }
    else{
      res.sendFile(__dirname + "/failure.html");
    }
    response.on("data", function(data) {
      console.log(JSON.parse(data));
    })
  })
  request.write(jsonData);
  request.end();
});
app.post("/failure", function (req, res) {
  res.redirect("/")
});
app.listen(3000, function() {
  console.log("I am running Boss!");
});



//API KEY
//2a9688d77a9862a838fe7fc100a001cb-us2
//list id
//613b1182fe
