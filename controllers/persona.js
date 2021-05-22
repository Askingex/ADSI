import Persona from '../models/persona.js'

const personaGet=async(req,res)=>{
    const {value}=req.query;
        const persona = await Persona 
             .find()
             .sort({"createAt":-1})

    res.json({
        persona
    })  
}

const personaGetClientes=async(req,res)=>{
    const {value}=req.query;
        const persona = await Persona 
             .find({tipopersona:"cliente"})
             .sort({"createAt":-1})

    res.json({
        persona
    })  
}

const personaGetProveedores=async(req,res)=>{
    const {value}=req.query;
        const persona = await Persona 
             .find({tipopersona:"proveedor"})
             .sort({"createAt":-1})

    res.json({
        persona
    })  
}

const personaGetById=async(req,res)=>{
    const {id}=req.params;
        const persona = await Persona.findOne({_id:id})

    res.json({
        persona
    })  
}

const personaPost=async(req,res)=>{
    const {tipopersona,nombre,tipodocumento,numdocumento,direccion,telefono,email}=req.body;
    
    const persona = new Persona ({tipopersona,nombre,tipodocumento,numdocumento,direccion,telefono,email})

    await  persona.save();

    res.json({
        persona
    })


}

const personaPut=async(req,res)=>{
    const {id}=req.params;
    const {_id,createAt,estado,_v,...resto}=req.body;
    const persona=await Persona.findByIdAndUpdate(id,resto)
    res.json({
        persona
    })
}

const personaPutActivar=async(req,res)=>{
    const {id}=req.params;
    const persona=await Persona.findByIdAndUpdate(id,{estado:1})
    res.json({
        persona
    })
}

const personaPutDesactivar=async(req,res)=>{
    const {id}=req.params;
    const persona=await Persona.findByIdAndUpdate(id,{estado:0})
    res.json({
        persona
    })
}

const personaDelete=async(req,res)=>{
    const {id}=req.params;
    const persona=await Persona.findByIdAndDelete(id)
    res.json({
        persona
    })
}

export {personaGet,personaGetById,personaPost,personaPut,personaPutActivar,personaPutDesactivar,personaDelete,personaGetClientes,personaGetProveedores}

