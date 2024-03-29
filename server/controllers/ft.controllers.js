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
        const {code, date_admission, lab, brand, model, diagnosis, m_preventive, m_corrective,  disarmed_e, cleaning_tm, cleaning_ram, cleaning_cc, cleaning_tv, cleaning_fa, change_pt, cleaning_q, cleaning_ld, cleaning_tr, check_e, m_logical, causes, conclusion, installation_so, installation_drivers, installation_oficce, activation_oficce, installation_utility, installation_antivirus, installation_as, update_so, update_drivers, update_utility, date_departure, responsible, installation_so1, installation_drivers1, installation_oficce1, installation_utility1, installation_antivirus1, installation_as1} = req.body
        console.log(date_admission)
        console.log(date_departure)
        const newFt = new Ft({code, date_admission, lab, brand, model, diagnosis, m_preventive, m_corrective, disarmed_e, cleaning_tm, cleaning_ram, cleaning_cc, cleaning_tv, cleaning_fa, change_pt, cleaning_q, cleaning_ld, cleaning_tr, check_e, m_logical, causes, conclusion, installation_so, installation_drivers, installation_oficce, activation_oficce, installation_utility, installation_antivirus, installation_as, update_so, update_drivers, update_utility, date_departure, responsible, installation_so1, installation_drivers1, installation_oficce1, installation_utility1, installation_antivirus1, installation_as1}) 
        console.log(newFt)
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

/* export const deleteFt = async (req, res) => {
    try {
        const ftRemoved = await Ft.findByIdAndDelete(req.params.id)
        if(!ftRemoved) return res.sendStatus(404)
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
} */

export const deleteFtLogical = async (req, res) => {
    try {
        const updateFtDelete = await Ft.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!updateFtDelete) return res.sendStatus(404)
        return res.send(updateFtDelete) 
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const restoreFtLogical = async (req, res) => {
    try {
        const updateFtrestore = await Ft.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!updateFtrestore) return res.sendStatus(404)
        return res.send(updateFtrestore) 
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

    const {date_departure_ini, date_departure_end} = req.body   

    try {
        const repo = await Ft.find({"date_departure": {$gte: date_departure_ini, $lte: date_departure_end}})
        res.send(repo)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}