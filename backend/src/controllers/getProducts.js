const db = require("../../db");
const getProducts = (req, res) => {
  const query = "SELECT * FROM products";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching products:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(results);
  });
};

module.exports = { getProducts };
