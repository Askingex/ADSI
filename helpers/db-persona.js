import Persona from "../models/persona.js";

const existePersonaById=async()=>{
    const existe=await Persona.findById(id);

    if(!existe){
        throw new Error(`El ID no existe ${id}`)
    }
}

const existePersonaByNombre=async(numDocumento)=>{
    const existe=await Persona.findOne({numDocumento:numDocumento}); 
    if(existe) throw new Error(`Ya existe persona con ese documento ${numDocumento}`); 
}

export {existePersonaById,existePersonaByNombre}