const customerController = require("../controllers/CustomerController");
const express = require("express");

const router = express.Router();

router.post("/customers", customerController.createCustomer);
router.get("/customers", customerController.getAllUser);
router.get("/customers/:id", customerController.getCustomerById);
router.delete("/customers/:id", customerController.deleteCustomerById);

module.exports = router;
