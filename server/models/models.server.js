var connectionString = 'mongodb://127.0.0.1:27017/web-maker'; // for local

if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely

  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += "@ds121834.mlab.com:21834/heroku_1l5ks834"; // use yours
}
// Import mongoose library
var mongoose = require("mongoose");

// Connect server with database
var db = mongoose.connect(connectionString, { useNewUrlParser: true });

// Expert this file
module.exports = db;

