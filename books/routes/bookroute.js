const express = require("express");
const bookController = require("../controllers/Boookcontroller");

const router = express.Router();

router.post("/books", bookController.createBook);
router.get("/books", bookController.getAllBooks);
router.get("/books/:id", bookController.getBookById);
router.delete("/books/:id", bookController.deleteBookById);

module.exports = router;
