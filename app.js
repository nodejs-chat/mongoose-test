var mongoose = require('mongoose');

const uri = "<URI>";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connection Successful!");
    
    // define Schema
    var UserSchema = mongoose.Schema({
      name: String,
      mail: String,
      username: String,
      password: String
    });
 
    // compile schema to model
    var User = mongoose.model('User', UserSchema, 'users');
 
    // a document instance
    var users = [{ name: 'Noam', mail: 'noam@gmail.com', username: 'noam_1', password: 'noam123#' },
                    { name: 'David', mail: 'david@gmail.com', username: 'david31', password: 'david123@' },
                    { name: 'Eliya', mail: 'eliya@gmail.com', username: 'eliyad', password: 'eliyad123!' }];
 
    // save multiple documents to the collection referenced by Book Model
    User.collection.insertMany(users, function (err, docs) {
      if (err){ 
          return console.error(err);
      } else {
        console.log("Multiple documents inserted to Collection");
      }
    });

});

