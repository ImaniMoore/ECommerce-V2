const path = require("path");
require("dotenv").config();
const express = require("express");
const productRoute = require("./src/routes/products");
const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Use API routes
app.use("/api/products", productRoute);

// Catch-all handler for any requests not matched by the above routes
app.get("{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
