require("dotenv").config();
const express = require("express");
const db = require("./db");
const morgan = require("morgan");
const app = express();
app.use(express.json());
app.use(morgan("dev"));

// Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  const results = await db.query("SELECT * FROM restaurants");
  console.log(results);
  res.status(200).json({
    status: "success",
    data: {
      restaurants: ["mcdonalds", "wendys"],
    },
  });
});

// Get a single restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      restaurant: "mcdonalds",
    },
  });
});

// Create Restaurant
app.post("/api/v1/restaurant", (req, res) => {
  res.status(201).json({
    status: "success",
    data: {
      restaurant: "mcdonalds",
    },
  });
  console.log(req.body);
});

// Update Restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: {
      restaurant: "mcdonalds",
    },
  });
});

// Delete restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
  res.status(204).json({ status: "success" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is up and listening on port ${PORT}`);
});
