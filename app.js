const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/",function(req,res){
  var email = req.body.email;
  var fname = req.body.first;
  var lname = req.body.second;
  console.log(fname,email,lname);
})

app.listen(3000,function(){
  console.log("Server started on port 3000!");
});
