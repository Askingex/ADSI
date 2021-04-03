import {Router} from 'express'
import {usuarioGet, usuarioGetById, usuarioPost, usuarioPut,usuarioPutActivar,usuarioPutDesactivar,usuarioDelete,login} from '../controllers/usuario.js'

const router = Router();

router.get('/',usuarioGet)

router.get('/:id',[
    // check('id','No es ID valido').isMongoId(),
    // check('id').custom(existeCategoriaById),
    // validarCampos
],usuarioGetById)

router.post('/',usuarioPost)

router.post('/login',login)

router.put('/:id',usuarioPut) 

router.put('/activar/:id',usuarioPutActivar) 

router.put('/desactivar/:id',usuarioPutDesactivar) 

router.delete('/:id',usuarioDelete)

export default router;
