import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    supply: Number,
    description: String,
    rating: Number,
    occupation: String,
    category: String,
    price: Number,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
