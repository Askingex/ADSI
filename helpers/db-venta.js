import Venta from "../models/venta.js";

const existeVentaById=async()=>{
    const existe=await Venta.findById(id);

    if(!existe){
        throw new Error(`El ID no existe ${id}`)
    }
}

const existeVentaByNombre=async(id)=>{
    const existe=await Usuario.findOne({id:id}); 
    if(existe) throw new Error(`Ya existe usuario con ese ID ${id}`); 
}

export {existeVentaById,existeVentaByNombre}