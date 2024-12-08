const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./src/config/db.js");
const pointsRoute = require("./src/routes/updatePoints.js")


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Sample API endpoint
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is running!" });
});

// Routes
app.use(pointsRoute)

// Start Sever
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});
