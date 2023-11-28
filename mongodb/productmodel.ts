import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageBanner: String,
    images:[String],
    videos:[String],
    price: { type: Number },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
});

const Product = mongoose.model('Product', ProductSchema)

export default Product;