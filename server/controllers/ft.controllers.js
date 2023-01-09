import Ft from '../models/Ft.js'

export const getFts = async (req, res) => {
    try {
        const fts = await Ft.find()
        res.send(fts)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const createFt = async(req, res) => {
    try {  
        const {code, date_admission, lab, brand, model, diagnosis, m_preventive, m_corrective, m_logical, disarmed_e, cleaning_tm, cleaning_ram, cleaning_cc, cleaning_tv, cleaning_fa, change_pt, cleaning_q, cleaning_ld, cleaning_tr, check_e, causes, conclusion, installation_so, installation_drivers, installation_oficce, activation_oficce, installation_utility, installation_antivirus, installation_as, update_so, update_drivers, update_utility, date_departure, responsible} = req.body
        const newFt = new Ft({code, date_admission, lab, brand, model, diagnosis, m_preventive, m_corrective, m_logical, disarmed_e, cleaning_tm, cleaning_ram, cleaning_cc, cleaning_tv, cleaning_fa, change_pt, cleaning_q, cleaning_ld, cleaning_tr, check_e, causes, conclusion, installation_so, installation_drivers, installation_oficce, activation_oficce, installation_utility, installation_antivirus, installation_as, update_so, update_drivers, update_utility, date_departure, responsible}) 
        await newFt.save()
        return res.json(newFt)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updateFt = async (req, res) => {
    try {
        const updateFt = await Ft.findByIdAndUpdate(req.params.id, req.body ,{new: true})
        res.send(updateFt)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
} 

export const deleteFt = async (req, res) => {
    try {
        const ftRemoved = await Ft.findByIdAndDelete(req.params.id)
        if(!ftRemoved) return res.sendStatus(404)
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getFt = async (req, res) => {
    try {
        const ft = await Ft.findById(req.params.id)
        if(!ft) return res.sendStatus(404)
        return res.json(ft)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getReportes = async (req, res) => {

    const {date_inicio, date_end} = req.body   
    console.log(req.body)

    try {
        const repo = await Ft.find({"date_departure": {$gte: date_inicio, $lte: date_end}})
        res.send(repo)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}