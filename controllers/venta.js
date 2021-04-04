import Venta from '../models/venta.js'

const ventaGet=async(req,res)=>{
    const {value}=req.query;
        const venta = await Venta 
             .find({
                 $or:[
                     {nombre:new RegExp(value,'i')},
                     {descripcion:new RegExp(value,'i')}
                 ]
             })
             .sort({"createAt":-1})

    res.json({
        venta
    })  
}

const ventaGetById=async(req,res)=>{
    const {id}=req.params;
        const venta = await Venta.findOne({_id:id})

    res.json({
        venta
    })  
}

const ventaPost=async(req,res)=>{
    const {nombre,descripcion}=req.body;
    
    const venta = new Venta ({nombre,descripcion})

    await  venta.save();

    res.json({
        venta
    })


}

const ventaPut=async(req,res)=>{
    const {id}=req.params;
    const {_id,createAt,estado,_v,...resto}=req.body;
    const venta=await Venta.findByIdAndUpdate(id,resto)
    res.json({
        venta
    })
}

const ventaPutActivar=async(req,res)=>{
    const {id}=req.params;
    const venta=await Venta.findByIdAndUpdate(id,{estado:1})
    res.json({
        venta
    })
}

const ventaPutDesactivar=async(req,res)=>{
    const {id}=req.params;
    const venta=await Venta.findByIdAndUpdate(id,{estado:0})
    res.json({
        venta
    })
}

const ventaDelete=async(req,res)=>{
    const {id}=req.params;
    const venta=await Venta.findByIdAndDelete(id)
    res.json({
        venta
    })
}

export {ventaGet,ventaGetById,ventaPost,ventaPut,ventaPutActivar,ventaPutDesactivar,ventaDelete}

