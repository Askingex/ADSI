import bcryptjs from 'bcryptjs'
import Usuario from '../models/usuario.js'

const usuarioGet=async(req,res)=>{
    const usuarios=await Usuario.find();

    res.json({
        usuarios
    })
}

const usuarioGetById=async(req,res)=>{
    const {id}=req.params 

    const usuarios= await Usuario.findById(id)

    res.json({
        usuarios
    })
}

const usuarioPost=async(req,res)=>{
    const{nombre,email,password,rol}=req.body
    const usuario=Usuario({nombre,email,password,rol})

    // encriptar
    const salt=bcryptjs.genSaltSync();
    usuario.password=bcryptjs.hashSync(password,salt)//

    usuario.save();

    res.json({
        usuario
    })
}

const usuarioPut=async(req,res)=>{
    const {id}=req.params 

    const {_id,email,estado,createdAt,__v,password,...resto}=req.body

    if(password){
        const salt=bcryptjs.genSaltSync();
        resto.password=bcryptjs.hashSync(password,salt);
    }

    const usuarios=await Usuario.findByIdAndUpdate(id , resto)


    res.json({
        usuarios
    })
}

const usuarioPutActivar=async(req,res)=>{
    const {id}=req.params 

    const usuarios= await Usuario.findByIdAndUpdate(id,{estado:1})

    res.json({
        usuarios
    })
}

const usuarioPutDesactivar=async(req,res)=>{
    const {id}=req.params 

    const usuarios= await Usuario.findByIdAndUpdate(id,{estado:0})

    res.json({
        usuarios
    })
}

const usuarioDelete=async(req,res)=>{
    const {id}=req.params 

    const usuarios= await Usuario.findByIdAndDelete(id)

    res.json({
        usuarios
    })
}

export {usuarioGet,usuarioPost,usuarioGetById,usuarioPut,usuarioPutActivar,usuarioPutDesactivar,usuarioDelete}