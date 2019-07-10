const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhosttwitter", {
  keepAlive: true,
  useNewUrlParser: true
});

module.exports.User = require("./user");
