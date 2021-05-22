import mongoose from "mongoose";

const personaSchema = mongoose.Schema({
    tipopersona: { type: String, require: true, maxlength: 20 },
    nombre: { type: String, maxlength: 50, unique: true },
    tipodocumento: { type: String, require: true, maxlength: 20 },
    numdocumento: { type: String, maxlength: 20 },
    direccion: { type: String, maxlength: 70 },
    telefono: { type: String, maxlength: 20 },
    email: { type: String, maxlength: 50, unique:true },
    estado:{type:Number, default:1},
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Persona', personaSchema)