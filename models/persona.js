import mongoose from "mongoose"; 

const personaaSchema=mongoose.Schema({
    tipopersona:{type:String,require:true,maxlength:20},
    nombre:{type:String, require:true,maxlength:60},
    tipodocumento:{type:String},
    numdocumento:{type:String},
    direccion:{type:String},
    telefono:{type:String},
    email:{type:String, maxlength:70,unique:true},
    password:{type:String,required:true},
    rol:{type:String,required:true,maxlength:15},
    estado:{type:Number, default:1},
    createdAt:{type:Date, default:Date.now} 
}) 

export default mongoose.model('persona',personaSchema)