const express = require("express");
const router = express.Router();
const Points = require("../models/Points");

router.post("/api/points", async (req, res) => {
  try {
    const { user, easy, medium, hard, total } = req.body;

    const updatedPoints = await Points.findOneAndReplace(
      { user: user }, // find by user
      { user, easy, medium, hard, total }, // new document
      { new: true, upsert: true } // return new doc, create if doesn't exist
    );

    res.status(201).json(updatedPoints);
  } catch (error) {
    console.error("Error saving points:", error);
    res.status(500).json({ error: "Failed to save points data" });
  }
});

// GET endpoint to fetch all points
router.get("/api/points", async (req, res) => {
  try {
    const points = await Points.find({});
    res.status(200).json(points);
  } catch (error) {
    console.error("Error fetching points:", error);
    res.status(500).json({ error: "Failed to fetch points data" });
  }
});

module.exports = router;
