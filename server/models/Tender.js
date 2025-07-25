const mongoose = require("mongoose");

const TenderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  sector: { type: String, required: true }, // Added sector field
  categories: {
    type: Map,
    of: [String], // Array of subcriteria IDs selected for each category
    required: true
  },
  categoriesOrder: { type: [String], required: true }, // Order of categories as arranged by user
  isDraft: { type: Boolean, default: false }, // Track if tender is draft or finalized
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Tender", TenderSchema);