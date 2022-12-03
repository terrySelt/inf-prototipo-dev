import mongoose from "mongoose"

const ftSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    date_admission:{
        type: Date,
        required: true,
        trim: true,
        default: Date.now
    },
    lab: {
        type: String,
        required: true,
        trim: true
    },
    brand: {
        type: String,
        required: true,
        trim: true
    },
    type:{
        type: String,
        required: true,
        trim: true
    },
    model: {
        type: String,
        trim: true
    },
    diagnosis:{
        type: String,
        required: true,
        trim: true
    },
    type_maintenance:{
        type: String,
        required: true,
        trim: true
    },
    mpreventive: {
        disarmed_e: {
            type: Boolean,
            default: false
        },
        cleaning_tm: {
            type: Boolean,
            default: false
        },
        cleaning_ram: {
            type: Boolean,
            default: false
        },
        cleaning_cc: {
            type: Boolean,
            default: false
        },
        cleaning_tv: {
            type: Boolean,
            default: false
        },
        cleaning_fa: {
            type: Boolean,
            default: false
        },
        change_pt: {
            type: Boolean,
            default: false
        },
        cleaning_q: {
            type: Boolean,
            default: false
        },
        cleaning_ld: {
            type: Boolean,
            default: false
        },
        cleaning_tr: {
            type: Boolean,
            default: false
        },
        check_e: {
            type: String,
            trim: true
        }
    },
    mcorrective: {
        causes:{
            type: String,
            trim: true
        },
        conclusion:{
            type: String,
            trim: true
        }
    },
    mlogical: {
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
        }
    },
    date_departure:{
        type: Date,
        trim: true,
        default: Date.now
    },
    responsible: {
        type: String,
        required: true,
        trim: true
    }
})

export default mongoose.model('Ft', ftSchema)