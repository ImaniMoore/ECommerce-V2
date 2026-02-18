const express = require("express");
const { getProducts } = require("../controllers/getProducts");

const router = express.Router();

// GET /api/products
router.get("/", getProducts);

module.exports = router;
