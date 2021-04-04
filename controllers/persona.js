import Persona from '../models/persona.js'

const personaGet=async(req,res)=>{
    const {value}=req.query;
        const persona = await Persona 
             .find({
                 $or:[
                     {nombre:new RegExp(value,'i')},
                     {descripcion:new RegExp(value,'i')}
                 ]
             })
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
    const {nombre,descripcion}=req.body;
    
    const persona = new Persona ({nombre,descripcion})

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

export {personaGet,personaGetById,personaPost,personaPut,personaPutActivar,personaPutDesactivar,personaDelete}

