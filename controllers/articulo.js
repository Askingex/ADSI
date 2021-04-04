import Articulo from '../models/articulo.js'

const articuloGet=async(req,res)=>{
    const {value}=req.query;
        const articulo = await Articulo 
             .find({
                 $or:[
                     {nombre:new RegExp(value,'i')},
                     {descripcion:new RegExp(value,'i')}
                 ]
             })
             .sort({"createAt":-1})

    res.json({
        articulo
    })  
}

const articuloGetById=async(req,res)=>{
    const {id}=req.params;
        const categoria = await Articulo.findOne({_id:id})

    res.json({
        articulo
    })  
}

const articuloPost=async(req,res)=>{
    const {nombre,descripcion}=req.body;
    
    const articulo = new Articulo ({nombre,descripcion})

    await  articulo.save();

    res.json({
        articulo
    })


}

const articuloPut=async(req,res)=>{
    const {id}=req.params;
    const {_id,createAt,estado,_v,...resto}=req.body;
    const articulo=await Articulo.findByIdAndUpdate(id,resto)
    res.json({
        articulo
    })
}

const articuloPutActivar=async(req,res)=>{
    const {id}=req.params;
    const articulo=await Articulo.findByIdAndUpdate(id,{estado:1})
    res.json({
        articulo
    })
}

const articuloPutDesactivar=async(req,res)=>{
    const {id}=req.params;
    const articulo=await Articulo.findByIdAndUpdate(id,{estado:0})
    res.json({
        articulo
    })
}

const articuloDelete=async(req,res)=>{
    const {id}=req.params;
    const categoria=await Articulo.findByIdAndDelete(id)
    res.json({
        articulo
    })
}

export {articuloGet,articuloGetById,articuloPost,articuloPut,articuloPutActivar,articuloPutDesactivar,articuloDelete}

