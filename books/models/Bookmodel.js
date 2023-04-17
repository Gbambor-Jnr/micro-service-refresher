const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    numberPages: { type: Number, required: true },
    publisher: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("book", bookSchema);
