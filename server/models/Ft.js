import mongoose from "mongoose"

const ftSchema = new mongoose.Schema({
    code: {
        type: String,
        trim: true,
    },
    date_admission:{
        type: Date,
        trim: true,
    },
    lab: {
        type: String,
        trim: true
    },
    brand: {
        type: String,
        trim: true
    },
    model: {
        type: String,
        trim: true
    },
    diagnosis:{
        type: String,
        trim: true
    },
    m_preventive:{
        type: Boolean,
    },
    m_corrective:{
        type: Boolean,
    },
    m_logical:{
        type: Boolean,
    },
    disarmed_e: {
        type: Boolean,
    },
    cleaning_tm: {
        type: Boolean,
    },
    cleaning_ram: {
        type: Boolean,
    },
    cleaning_cc: {
        type: Boolean,
    },
    cleaning_tv: {
        type: Boolean,
    },
    cleaning_fa: {
        type: Boolean,
    },
    change_pt: {
        type: Boolean,
    },
    cleaning_q: {
        type: Boolean,
    },
    cleaning_ld: {
        type: Boolean,
    },
    cleaning_tr: {
        type: Boolean,
    },
    check_e: {
        type: String,
        trim: true
    },
    causes:{
        type: String,
        trim: true
    },
    conclusion:{
        type: String,
        trim: true
    },
    installation_so:{
        type: String,
        trim: true
    },
    installation_drivers:{
        type: String,
        trim: true
    },
    installation_oficce:{
        type: String,
        trim: true
    },
    activation_oficce:{
        type: String,
        trim: true
    },
    installation_utility:{
        type: String,
        trim: true
    },
    installation_antivirus:{
        type: String,
        trim: true
    },
    installation_as:{
        type: String,
        trim: true
    },
    update_so:{
        type: String,
        trim: true
    },
    update_drivers:{
        type: String,
        trim: true
    },
    update_utility:{
        type: String,
        trim: true
    },
    date_departure:{
        type: Date,
        trim: true,
        default: new Date().toLocaleString()
    },
    responsible: {
        type: String,
        required: true,
        trim: true
    }
})

export default mongoose.model('Ft', ftSchema)