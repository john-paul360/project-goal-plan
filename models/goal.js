const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    title:{
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    description: {
        type: String,
        require: true,
    },
    progress:{
        type: Number,
        default: 0,
        min: 0,
        max: 100,
        require: true,
    }
},
 {timestamps: true}
);

const GOAL = mongoose.model("Goal", goalSchema);
module.exports = GOAL;