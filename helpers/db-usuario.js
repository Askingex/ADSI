import Usuario from "../models/usuario.js";

const existeUsuarioById=async()=>{
    const existe=await Usuario.findById(id);

    if(!existe){
        throw new Error(`El ID no existe ${id}`)
    }
}

const existeUsuarioByNombre=async(nombre)=>{
    const existe=await Usuario.findOne({nombre:nombre}); 
    if(existe) throw new Error(`Ya existe usuario con ese nombre ${nombre}`); 
}

export {existeUsuarioById,existeUsuarioByNombre}