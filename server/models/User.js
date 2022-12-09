import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    image: {
        url: {
            type: String,
            default:'https://res.cloudinary.com/dvgn925ka/image/upload/v1670426538/prototipo/1_pqf1ax.png'
        },
        public_id: {
            type: String,
            default: "prototipo/1_pqf1ax.png"
        },
    },
    type: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    }
})

export default mongoose.model('User', userSchema)