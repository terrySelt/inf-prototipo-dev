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
    model:{
        type: String,
        required: true,
        trim: true
    },
    brand: {
        type: String,
        required: true,
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
    },
    state: {
        type: Boolean,
        default: false
    }
})

export default mongoose.model('Computer', computerSchema)