const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/noderest", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
