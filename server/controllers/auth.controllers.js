import User from "../models/User.js"
import jwt from "jsonwebtoken"
import { SECRET } from "../config.js"

export const login = async (req, res) => {

    const userFound = await User.findOne({email: req.body.email}).populate("roles")

    if(!userFound) return res.status(400).json({message: "User not found"})

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    if(!matchPassword) return res.status(401).json({token: null, message: 'Invalid password'})

    const token = jwt.sign({id: userFound._id}, SECRET, {expiresIn: 86400})

    res.json({token})

}




