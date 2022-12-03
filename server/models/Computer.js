import mongoose from "mongoose";

const computerSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    image: {
        url: String,
        public_id: String
    },
    lab: {
        type: String,
        required: true,
        trim: true
    },
    type:{
        type: String,
        required: true,
        trim: true
    },
    brand: {
        type: String,
        required: true,
        trim: true
    },
    serie: {
        type: String,
        trim: true
    },
    model: {
        type: String,
        trim: true
    },
    processor: {
        type: String,
        required: true,
        trim: true
    },
    memory: {
        type: String,
        required: true,
        trim: true
    },
    disk: {
        type: String,
        required: true,
        trim: true
    },
    graphic: {
        type: String,
        required: true,
        trim: true
    },
    system: {
        type: String,
        required: true,
        trim: true
    }
})

export default mongoose.model('Computer', computerSchema)