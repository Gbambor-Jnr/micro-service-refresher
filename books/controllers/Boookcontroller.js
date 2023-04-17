const Book = require("../models/Bookmodel");

exports.createBook = async (req, res, next) => {
  const author = req.body.author;
  const title = req.body.title;
  const publisher = req.body.publisher;
  const numberPages = req.body.numberPages;

  try {
    const createdBook = new Book({
      author,
      title,
      publisher,
      numberPages,
    });

    const savedBook = await createdBook.save();
    res.status(201).json({ message: "Book created succesfully" });
  } catch (err) {
    console.log(err.message);
  }
};

exports.getAllBooks = async (req, res, next) => {
  try {
    const allBooks = await Book.find();
    res.status(200).json({ data: allBooks });
  } catch (err) {
    console.log(err);
  }
};

exports.getBookById = async (req, res, next) => {
  const params = req.params;

  try {
    if (!params.id) {
      return;
    }
    const bookFound = await Book.findById(params.id);
    res.status(200).json({ data: bookFound });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteBookById = async (req, res, next) => {
  const params = req.params;
  try {
    const deletedBook = await Book.findOneAndRemove(params.id);
    res.status(200).json({ messsage: "DELETED SUCCESFULLLY" });
  } catch (err) {
    console.log(err.message);
  }
};
