import Compra from "../models/compra.js";

const existeCompraById=async()=>{
    const existe=await Compra.findById(id);

    if(!existe){
        throw new Error(`El ID no existe ${id}`)
    }
}

const existeCompraByNombre=async(id)=>{
    const existe=await Usuario.findOne({id:id}); 
    if(existe) throw new Error(`Ya existe compra con ese ID ${id}`); 
}

export {existeCompraById,existeCompraByNombre}