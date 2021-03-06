import Categoria from "../models/categoria.js"

const existeCategoriaById=async()=>{
    const existe=await Categoria.findById(id);

    if(!existe){
        throw new Error(`El ID no existe ${id}`)
    }
}

const existeCategoriaByNombre=async(nombre)=>{
    const existe=await Categoria.findOne({nombre:nombre}); 
    if(existe) throw new Error(`Ya existe categoria con ese nombre ${nombre}`); 
}

export {existeCategoriaById,existeCategoriaByNombre}