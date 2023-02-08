import mongoose, { Schema } from "mongoose"
import bcrypt from 'bcrypt'

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
    },
    recoveryToken: {
        type: String,
        default: null,
        trim: true
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
})

userSchema.statics.encriptPassword = async (password) => {
    return await  bcrypt.hash(password, 10)
}

userSchema.statics.comparePassword = async (password, receivePassword) => {
    return await bcrypt.compare(password, receivePassword)
}

export default mongoose.model('User', userSchema)