import User from "../models/User.js"
import Role from "../models/Role.js"
import {uploadImage, deleteImage} from "../libs/cloudinary.js"
import fs from "fs-extra"

export const getUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password -recoveryToken")
        res.send(users)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}


export const createUser = async (req, res) => {
    try {
        const {name, email, roles, password} = req.body
        
        let image;
        
        if(req.files?.image){
            const result = await uploadImage(req.files.image.tempFilePath)
            await fs.remove(req.files.image.tempFilePath)
            image = {
                url : result.secure_url,
                public_id : result.public_id
            }
        }

        let newUser = new User({name, image, email, password: await User.encriptPassword(password),})

        if(roles==="admin"){
            const roleuser = await Role.findOne({name: "user"})
            const roleadmin = await Role.findOne({name: "admin"})
            newUser.roles = [roleadmin._id, roleuser._id] 
        } 
        if(roles==='user'){
            const roleuser = await Role.findOne({name: "user"})
            newUser.roles = [roleuser._id]
        }
        
        await newUser.save()
        delete newUser._doc.password
        delete newUser._doc.recoveryToken
        return res.json(newUser)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updateUser = async (req, res) => {
    try {
        
        const user = await User.findById(req.params.id)//user por el id
        const roleadmin = await Role.findOne({name: "admin"})//rol admin

        if(req.body?.oldpassword){
            const {oldpassword, newpassword, confirmpassword} = req.body
            const matchPassword = await User.comparePassword(oldpassword, user.password)

            if(matchPassword){
                if(newpassword === confirmpassword){
                    const encript = await User.encriptPassword(newpassword)
                    const updatedPassword = await User.findByIdAndUpdate(user._id, {password: encript}, { new: true})
                    if(!updatedPassword) return res.status(500).json({message: 'the passwords are not the same'}) 
                    return res.send('password change')
                }else{
                    return res.status(500).json({message: 'the passwords are not the same'})    
                }
            }else{
                return res.status(500).json({message: 'the passwords are not the same'})
            }
        }
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
                email: req.body.email,
                password: req.body.password
            }

                
            if(req.body.roles === 'user'){

                const admin = user.roles.find(item => item.toString() === roleadmin._id.toString())//se identifica el rol admin
                const updatedrole = await User.findByIdAndUpdate(req.params.id, {$pull: {"roles": admin}}, { new: true}) //se elimina el rol admin
                    
                const updatedUser = await User.findByIdAndUpdate(req.params.id, body, { new: true})
                delete updatedUser._doc.password
                delete updatedUser._doc.recoveryToken
                return res.send(updatedUser)
            } else{

                const admin = user.roles.find(item => item.toString() === roleadmin._id.toString())
                if(!admin){
                    const updatedrole = await User.findByIdAndUpdate(req.params.id, {$push: {"roles": roleadmin._id}}, { new: true}) 
                    const updatedUser = await User.findByIdAndUpdate(req.params.id, body, { new: true})
                    delete updatedUser._doc.password
                    delete updatedUser._doc.recoveryToken
                    return res.send(updatedUser)
                } else{
                        const updatedUser = await User.findByIdAndUpdate(req.params.id, body, { new: true})
                        delete updatedUser._doc.password
                        delete updatedUser._doc.recoveryToken
                        return res.send(updatedUser) 
                    }
                }

        } else{       

            let body = {
                name: req.body.name,
                email: req.body.email,
            }
                
            if(req.body.roles === 'user'){
                const admin = user.roles.find(item => item.toString() === roleadmin._id.toString())//se identifica el rol admin
                const updatedrole = await User.findByIdAndUpdate(req.params.id, {$pull: {"roles": admin}}, { new: true}) //se elimina el rol admin       
                const updatedUser = await User.findByIdAndUpdate(req.params.id, body, { new: true})
                delete updatedUser._doc.password
                delete updatedUser._doc.recoveryToken
                return res.send(updatedUser)
            } else{
                const admin = user.roles.find(item => item.toString() === roleadmin._id.toString())
                if(!admin){
                    const updatedrole = await User.findByIdAndUpdate(req.params.id, {$push: {"roles": roleadmin._id}}, { new: true}) 
                    const updatedUser = await User.findByIdAndUpdate(req.params.id, body, { new: true})
                    delete updatedUser._doc.password
                    delete updatedUser._doc.recoveryToken
                    return res.send(updatedUser)
                } else{
                    const updatedUser = await User.findByIdAndUpdate(req.params.id, body, { new: true})
                    delete updatedUser._doc.password
                    delete updatedUser._doc.recoveryToken
                    return res.send(updatedUser) 
                }
            }      
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
        const user = await User.findById(req.params.id).select("-password -recoveryToken")
        if(!user) return res.sendStatus(404)
        return res.json(user)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}
