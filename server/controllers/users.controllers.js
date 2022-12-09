import User from "../models/User.js"
import {uploadImage, deleteImage} from "../libs/cloudinary.js"
import fs from "fs-extra"

export const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const createUser = async (req, res) => {
    try {
        const {name, type, email, password}= req.body

        let image;
        
        if(req.files?.image){
            const result = await uploadImage(req.files.image.tempFilePath)
            await fs.remove(req.files.image.tempFilePath)
            image = {
                url : result.secure_url,
                public_id : result.public_id
            }
        }

        const newUser = new User({name, image, type, email, password})
        await newUser.save()
        return res.json(newUser)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updateUser = async (req, res) => {
    try {
        if(req.files?.image){
            const user = await User.findById(req.body._id)
            if(user.name.public_id!=="prototipo/1_pqf1ax.png"){
                await deleteImage(user.image.public_id)
            }
            let image;
            const result = await uploadImage(req.files.image.tempFilePath)
            await fs.remove(req.files.image.tempFilePath)
            image = {
                url : result.secure_url,
                public_id : result.public_id
            }
            let body = {
                name: req.body.name,
                image: image,
                type: req.body.type,
                email: req.body.email,
                password: req.body.password
            }
            const updatedUser = await User.findByIdAndUpdate(req.params.id, body, { new: true})
            return res.send(updatedUser)
        } else{
            let body = {
                name: req.body.name,
                type: req.body.type,
                email: req.body.email,
                password: req.body.password
            }
            const updatedUser = await User.findByIdAndUpdate(req.params.id, body, { new: true})
            return res.send(updatedUser)
        }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const deleteUser = async (req, res) => {
    try {
        const userRemoved = await User.findByIdAndDelete(req.params.id)
        
        if(!userRemoved) return res.sendStatus(404)
        
        if(userRemoved.image.public_id) {
            await deleteImage(userRemoved.image.public_id)
        }

        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if(!user) return res.sendStatus(404)
        return res.json(user)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}

export const signinUser = (req, res) => res.send('login usuario')
