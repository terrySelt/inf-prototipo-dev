import mongoose from "mongoose";

const labSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },  
    quantity:{
        type: Number,
        default: 0
    },
    responsible: {
        type: String,
    }
})

export default mongoose.model('Lab', labSchema)