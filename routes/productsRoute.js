const express = require("express");
const {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
  outOfStock,
} = require("../controllers/products.js");

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.get("/:id", getProduct);
router.delete("/:id", deleteProduct);
router.patch("/:id", updateProduct);
router.get("/pd/outofstock", outOfStock);

module.exports = router;
