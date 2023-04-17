const Customer = require("../models/CustomerModel");

exports.createCustomer = async (req, res, next) => {
  const age = req.body.age;
  const address = req.body.address;
  const name = req.body.name;
  //const email = req.body.email,

  const newCustomer = new Customer({ age, address, name });
  const savedCustomer = await newCustomer.save();

  res.status(201).json({ message: "Customer Created Succesfully" });
};

exports.getAllUser = async (req, res, next) => {
  try {
    const allCustomers = await Customer.find();
    res.status(200).json({ customers: allCustomers });
  } catch (err) {
    if (err) {
      throw err;
    }
  }
};

exports.getCustomerById = async (req, res, next) => {
  const params = req.params;
  try {
    const foundCustomer = await Customer.findById(params.id);
    if (!foundCustomer) {
      return;
    }
    res.status(200).json({ customer: foundCustomer });
  } catch (err) {
    if (err) {
      throw err;
    }
  }
};

exports.deleteCustomerById = async (req, res, next) => {
  const params = req.params;
  const foundCustomer = await Customer.findByIdAndDelete(params.id); //findByIdAndRemove is similar to findByIdAndDelete but differs slightly from findOneAndRemove as findoneandremove removes the first one that matches the query from the database and then
  res.status(200).json({ message: "Customer deleted Succesfully!!!" });
};
