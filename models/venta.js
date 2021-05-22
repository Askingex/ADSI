import mongoose from "mongoose"; 

const ventaSchema=mongoose.Schema({
    usuario:{type:mongoose.Schema.Types.ObjectId,ref:'Usuario', require:true},
    persona:{type:mongoose.Schema.Types.ObjectId,ref:'Persona', require:true},
    tipocomprobante:{type:String, require:true,maxlength:20},
    seriecomprobante:{type:String, require:true,maxlength:7},
    numcomprobante:{type:String, require:true,maxlength:10},
    impuesto:{type:Number, default:0.19},
    total:{type:Number, require:true},
    estado:{type:Number, default:1},
    detalles: [{
        _id:{
            type:String,
            required:true
        },
        articulo:{
            type:String,
            required:true
        },
        cantidad:{
            type:Number,
            required:true
        },
        precio:{
            type:Number,
            required:true
        },
        descuento:{
            type:Number,
            required:true
        }
    }],
    createdAt:{type:Date, default:Date.now}   
}) 

export default mongoose.model('Venta',ventaSchema)