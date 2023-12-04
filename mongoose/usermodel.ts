import mongoose from './mongooseConfig';

const UserSchema = new mongoose.Schema(
    {
        _id: { type: String, required: true },
        username: { type: String, required: true },
        role: { type: String, required: true, default: "user" },
        stared: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "product"
        }],
    },
    { timestamps: true, collection: 'user' });

const User = mongoose.models.user || mongoose.model("user", UserSchema);

export default User;

