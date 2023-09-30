const fs = require("fs");
let products = require("../data/products.json");
const path = require("path");

const updateProducts = path.join(__dirname, "../data/products.json");

function saveDataToJsonFile(products) {
  fs.writeFileSync(updateProducts, JSON.stringify(products, null, 2));
}

exports.getProducts = (req, res) => {
  res.send(products);
};
exports.getProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const findProduct = products.find((product) => product.id == id);
  res.send(findProduct);
};

exports.createProduct = (req, res) => {
  const product = req.body;
  products.push(product);
  saveDataToJsonFile(products);
  res.send(`Product ${product.name} added to database`);
};

exports.deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  products = products.filter((product) => product.id !== id);

  saveDataToJsonFile(products);
  res.send(`Product id ${id} deleted`);
};

exports.updateProduct = (req, res) => {
  const id = parseInt(req.params.id);

  const productToUpdate = products.find(
    (product) => parseInt(product.id) == id
  );
  const { name, price, desc, quantity, type } = req.body;
  if (name) {
    productToUpdate.name = name;
  }
  if (price) {
    productToUpdate.price = price;
  }
  if (desc) {
    productToUpdate.desc = desc;
  }
  if (quantity) {
    productToUpdate.quantity = quantity;
  }
  if (type) {
    productToUpdate.type = type;
  }
  saveDataToJsonFile(products);
  res.send(`Product id ${id} has been updated`);
};

exports.outOfStock = (req, res) => {
  const noProduct = products.filter((product) => product.quantity < 5);
  res.send(noProduct);
};
