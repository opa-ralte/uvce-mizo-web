const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const AnimeSchema=new Schema({
    name: {
        type: String,
        required:true
    },

    type: {
        type: String,
        required:true
    },
    protegonese: {
        type: String,
        
        default:null
        
    },
    villian: {
        type: String,
        default:null
    }
},{timestamps:true})
const Anime=mongoose.model('Anime', AnimeSchema);
    module.exports= Anime;