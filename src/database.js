const mongoose = require('mongoose')
const uri = 'mongodb://mongo/mydatabase';

mongoose.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    () => {
      console.log("mongdb is connected");
    }
  );