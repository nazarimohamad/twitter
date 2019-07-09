const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error")

const PORT = 8081


app.use(cors());
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("this is from route route")
});

app.use(function(req, res, next){
  let err = new Error("Not Found");
  err.status = 404;
  next(err)
});

app.use(errorHandler);

app.listen(PORT, function(){
  console.log(`server is running on port: ${PORT}`)
});