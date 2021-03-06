import mongoose from "mongoose"; 

const usuarioSchema=mongoose.Schema({
    nombre:{type:String, require:true,maxlength:60},
    email:{type:String, maxlength:70,unique:true},
    password:{type:String,required:true},
    rol:{type:String,required:true,maxlength:15},
    estado:{type:Number, default:1},
    createdAt:{type:Date, default:Date.now} 
    // ADMIN_ROL   ALMACENISTA_ROL   VENDEDOR_ROL 
}) 

export default mongoose.model('Usuario',usuarioSchema)