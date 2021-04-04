import mongoose from "mongoose"; 

const articuloSchema=mongoose.Schema({
    categoria:(categoriaSchema),
    codigo:{type:String},
    nombre:{type:String, require:true,maxlength:50,unique:true},
    descripcion:{type:String, maxlength:255},
    precioventa:{type:Number},
    stock:{type:Number},    
    estado:{type:Number, default:1},
    createdAt:{type:Date, default:Date.now}  
}) 

export default mongoose.model('articulo',articuloSchema)