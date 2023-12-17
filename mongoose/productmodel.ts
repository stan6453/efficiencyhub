import mongoose from "./mongooseConfig";

const ProductSchema = new mongoose.Schema(
    {
        name: { type: String},
        description: { type: String},
        features: [String],
        tags: [String],
        images: [String],
        videos: [String],
        category: { type: String},
        subcategory: { type: String},
        price: { type: Number },
        stores: [{
            store: String,
            link: String
        }]
    },
    { timestamps: true }
);

const Product = mongoose.models.product ?? mongoose.model('product', ProductSchema)

export default Product;