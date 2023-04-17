const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const customerRoute = require("./routes/CustomerRoutes");

const app = express();

app.use(bodyParser.json());
app.use(customerRoute);

mongoose
  .connect(
    "mongodb+srv://ikenna:Cornelik@cluster0.kytwgsm.mongodb.net/library-customer-service?retryWrites=true"
  )
  .then((result) => {
    app.listen(5061);
  });
