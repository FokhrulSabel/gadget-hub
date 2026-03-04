import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  shortDescription: { type: String },
  fullDescription: { type: String },
  price: { type: Number, required: true },
  image: { type: String },
  priority: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);