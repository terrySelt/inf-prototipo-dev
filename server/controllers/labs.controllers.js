import Lab from '../models/Lab.js'

export const getLabs = async (req, res) => {
    try {
        const labs = await Lab.find()
        res.send(labs)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const createLab = async(req, res) => {
    try {
        const {name, quantity, responsible} = req.body
        const newLab = new Lab({name, quantity, responsible})
        await newLab.save()
        return res.json(newLab)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updateLab = async (req, res) => {
    try {
        const updateLab = await Lab.findByIdAndUpdate(req.params.id, req.body ,{new: true})
        res.send(updateLab)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
} 

export const deleteLab = async (req, res) => {
    try {
        const labRemoved = await Lab.findByIdAndDelete(req.params.id)
        if(!labRemoved) return res.sendStatus(404)
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getLab = async (req, res) => {
    try {
        const lab = await Lab.findById(req.params.id)
        if(!lab) return res.sendStatus(404)
        return res.json(lab)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}