const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    dimension: { type: String, required: true },
    thickness: { type: String, required: true },
    color: { type: String, required: true },
    shape: { type: String, required: true },
    material: { type: String, required: true },
    resistance: { type: String, required: true },
    weight: { type: String, required: true },
    glass: { type: String, required: true },
    lug: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
