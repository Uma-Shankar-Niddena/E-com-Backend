
const mongoose=require("mongoose")

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },   // alcohol, stuff, soda, etc.
  subCategory: { type: String },
  description: { type: String },
  taste: { type: String },
  price: { type: Number, required: true },
  mrp: { type: Number },
  image: { type: String },
  pairings: { type: String },
  origin: { type: String },
  stock: { type: Number, default: 1 },
  year: { type: String },
  rating: { type: Number },
  strength: { type: String },
  flavor: { type: String },
  volume_ml: { type: Number },
  carbonated: { type: Boolean }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

module.exports= Product;
