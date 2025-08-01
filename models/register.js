const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const RegisterSchema=new Schema({
    name: {
        type: String,
        required:true
    },

    branch: {
        type: String,
        required:true
    },
    year: {
        type: Number,
        
        default:null
        
    },
    phone_number: {
        type: String,
        default:null
    },
    address: {
        type: String,
        default:null    
    }
},{timestamps:true})
const Register=mongoose.model('Register', RegisterSchema);
    module.exports= Register;