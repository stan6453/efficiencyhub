import mongoose from './mongooseConfig';

const UserSchema = new mongoose.Schema(
    {
        _id: { type: String, required: true },
        role: { type: String, required: true, default: "user" },
        wishlist: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "products"
        }],
    },
    { timestamps: true });

const User = mongoose.models.user || mongoose.model("user", UserSchema);

export default User;

