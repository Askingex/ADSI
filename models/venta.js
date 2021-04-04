import mongoose from "mongoose"; 

const ventaSchema=mongoose.Schema({
    usuario:(usuarioSchema),
    persona:(personaSchema),
    tipocomprobante:{type:String, require:true,maxlength:50,unique:true},
    seriecomprobante:{type:String},
    numcomprobante:{type:String},
    impuesto:{type:Number},
    total:{type:Number},
    descripcion:(articuloSchema),
    estado:{type:Number, default:1},
    createdAt:{type:Date, default:Date.now}   
}) 

export default mongoose.model('venta',ventaSchema)