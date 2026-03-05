import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  stock: { type: Number, default: 0 },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 0,
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
