import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    role: { type: String, required: true, default: "user" },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
});

const User = mongoose.model("User", UserSchema);

