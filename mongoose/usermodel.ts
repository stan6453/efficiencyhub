import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    _id: { type: String, required: true},
    username: { type: String, required: true },
    role: { type: String, required: true, default: "user" },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
});

const User = mongoose.model("User", UserSchema);

export default User;

