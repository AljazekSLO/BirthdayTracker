import mongoose from "mongoose";

const bdaySchema = mongoose.Schema({
    name: String,
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    birthday: String,
    createdAt: {
        type: Date,
        deafult: new Date(),
    }
});

export default mongoose.model("Birthday", bdaySchema);