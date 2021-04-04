import Articulo from "../models/articulo.js";

const existeArticuloById=async()=>{
    const existe=await Articulo.findById(id);

    if(!existe){
        throw new Error(`El ID no existe ${id}`)
    }
}

const existeArticuloByNombre=async(nombre)=>{
    const existe=await Articulo.findOne({nombre:nombre}); 
    if(existe) throw new Error(`Ya existe articulo con ese nombre ${nombre}`); 
}

export {existeArticuloById,existeArticuloByNombre}