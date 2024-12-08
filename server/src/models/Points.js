const mongoose = require('mongoose');

const pointsSchema = new mongoose.Schema({
  user: { type: String, required: true },
  easy: { type: Number, required: true, default: 0 },
  medium: { type: Number, required: true, default: 0 },
  hard: { type: Number, required: true, default: 0 },
  total: { type: Number, required: true, default: 0 },
});

const Points = mongoose.model('Points', pointsSchema);

module.exports = Points;
