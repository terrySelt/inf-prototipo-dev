import Computer from '../models/Computer.js'
import Lab from '../models/Lab.js'
import {uploadImage, deleteImage} from '../libs/cloudinary.js'
import QRCode from 'qrcode'
import { v4 } from 'uuid'
import fs from 'fs-extra'

export const getComputers = async (req, res) => {
    try {
        const computers =  await Computer.find()
        res.send(computers)
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
}

export const createComputer = async(req, res) => {
    try {
        const {code, lab, model, brand, processor, memory, disk, graphic, system} = req.body
        const imgname = v4()
        const QrGenerate = async text => {
            try {
                const qr = await QRCode.toFile(`./upload/${imgname}.png`, text)
            } catch (error) {
                console.log(error)
            }
        }
        QrGenerate(code)
        let image
        try {
            const result = await uploadImage(`./upload/${imgname}.png`)
            image = {
                url: result.secure_url,
                public_id: result.public_id
            }
            await fs.remove(`./upload/${imgname}.png`)
        } catch (error) {
            console.log(error)
        }
        const newComputer = new Computer({code, image, lab, model, brand, processor, memory, disk, graphic, system})
        await newComputer.save()
        const updateLab = await Lab.updateOne({name:lab}, { $inc: {quantity: 1} })
        const computer2 = await Computer.findOne({
            'image.public_id': image.public_id
        })
        if(!computer2){
            await deleteImage(image.public_id)
        }
        return res.json(newComputer)
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
}

export const updateComputer = async (req, res) => {
    try {
        const computer = await Computer.findById(req.params.id)

        if(req.body.code!==computer.code){

            await deleteImage(computer.image.public_id)
            const imgname = v4()
            const QrGenerate = async text => {
                try {
                    const qr = await QRCode.toFile(`./upload/${imgname}.png`, text)
                } catch (error) {
                    console.log(error)
                }
            }
            QrGenerate(req.body.code)
            let image
            try {
                const result = await uploadImage(`./upload/${imgname}.png`)
                image = {
                    url: result.secure_url,
                    public_id: result.public_id
                }
                await fs.remove(`./upload/${imgname}.png`)
            } catch (error) {
                console.log(error)
            }
            let body = {
                image: image,
                code: req.body.code,
                lab: req.body.lab,
                model: req.body.model,
                brand: req.body.brand,
                processor: req.body.processor,
                memory: req.body.memory,
                disk: req.body.disk,
                graphic: req.body.graphic,
                system: req.body.system           
            }
            if(req.body.lab!==computer.lab){
                const deletelab = await Lab.updateOne({name: computer.lab}, { $inc: {quantity: -1} })  
                const addlab = await Lab.updateOne({name: req.body.lab}, { $inc: {quantity: 1} })
                const updateComputer = await Computer.findByIdAndUpdate(req.params.id, body ,{new: true})
                return res.send(updateComputer) 
            }
            const updateComputer = await Computer.findByIdAndUpdate(req.params.id, body ,{new: true})
            return res.send(updateComputer)
        } else{
            let body = {
                lab: req.body.lab,
                type: req.body.model,
                brand: req.body.brand,
                processor: req.body.processor,
                memory: req.body.memory,
                disk: req.body.disk,
                graphic: req.body.graphic,
                system: req.body.system           
            }
            
            if(req.body.lab!==computer.lab){
                const deletelab = await Lab.updateOne({name: computer.lab}, { $inc: {quantity: -1} })  
                const addlab = await Lab.updateOne({name: req.body.lab}, { $inc: {quantity: 1} })
                const updateComputer = await Computer.findByIdAndUpdate(req.params.id, body ,{new: true})
                return res.send(updateComputer) 
            }
            const updateComputer = await Computer.findByIdAndUpdate(req.params.id, body ,{new: true})
            return res.send(updateComputer)    
        }
    
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
}

/* export const deleteComputer = async (req, res) => {
    try {
        const computerRemoved = await Computer.findByIdAndDelete(req.params.id)
        await Lab.updateOne({name:computerRemoved.lab}, { $inc: {quantity: -1} })
        if(!computerRemoved) return res.sendStatus(404)
        if(computerRemoved.image.public_id){
            await deleteImage(computerRemoved.image.public_id)
        }
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
} */

export const deleteComputer = async (req, res) => {
    try {
        const computerRemoved = await Computer.findByIdAndUpdate(req.params.id, req.body, {new: true})
        await Lab.updateOne({name:computerRemoved.lab}, { $inc: {quantity: -1} })
        if(!computerRemoved) return res.sendStatus(404)
        return res.send(computerRemoved) 
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
}

export const restoreComputer = async (req, res) => {
    try {
        const computerRestore = await Computer.findByIdAndUpdate(req.params.id, req.body, {new: true})
        await Lab.updateOne({name:computerRestore.lab}, { $inc: {quantity: +1} })
        if(!computerRestore) return res.sendStatus(404)
        return res.send(computerRestore)
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
}

export const getComputer = async (req, res) => {
    try {
        const computer = await Computer.findById(req.params.id)
        if(!computer) return res.sendStatus(404)
        return res.json(computer)
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
}