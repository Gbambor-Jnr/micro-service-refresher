const express = require("express");
const mongoose = require("mongoose");
const bookRoute = require("./routes/bookroute");
const bodyParser = require("body-parser");
const app = express();
//const cors = require("cors");

// app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(bookRoute);

// mongoose
//   .connect(
//     "mongodb+srv://ikenna:Cornelik@cluster0.kytwgsm.mongodb.net/library-book-service"
//   )
//   .then((result) => {
//     console.log("connected");
//     app.listen(4045);
//   });

mongoose
  .connect(
    "mongodb+srv://ikenna:Cornelik@cluster0.kytwgsm.mongodb.net/library-book-service?retryWrites=true"
  )
  .then((result) => {
    app.listen(5065);
  });
