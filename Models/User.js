import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    email:{ type: String, required: false },
    password:{ type: String, required: false },
    links: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Link'}],
});

export default mongoose.model("users",UserSchema );