import Categoria from '../models/categoria.js'

const categoriaPost=async(req,res)=>{
    const {nombre,descripcion}=req.body;
    
    const categoria = new Categoria ({nombre,descripcion})

     await  categoria.save();

    res.json({
        categoria
    })


}

export default categoriaPost

