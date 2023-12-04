import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        imageBanner: String,
        images: [String],
        videos: [String],
        category: { type: String, required: true },
        subcategory: { type: String, required: true },
        tags: [String],
        price: { type: Number },
        PurchaseLinks: [{
            store: String,
            link: String
        }],
    },
    { timestamps: true, collection: 'product' }
);

const Product = mongoose.models.product || mongoose.model('product', ProductSchema)

export default Product;