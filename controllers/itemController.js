// controllers/itemController.js
const Item = require("../models/Item");

exports.createItem = (req, res) => {
  const newItem = new Item(req.body);
  newItem
    .save()
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json({ error: err.message }));
};

exports.getAllItems = (req, res) => {
  Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json({ error: err.message }));
};

exports.getItemById = (req, res) => {
  Item.findById(req.params.name)
    .then((item) => res.json(item))
    .catch((err) => res.status(404).json({ error: "Item not found" }));
};

exports.updateItem = (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json({ error: err.message }));
};

exports.deleteItem = (req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: "Item deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "Item not found" }));
};
