import {Router} from 'express'
import {categoriaGet, categoriaPost, categoriaGetById, categoriaPut,categoriaPutActivar,categoriaPutDesactivar,categoriaDelete} from '../controllers/categoria.js'

const router = Router();


router.get('/:id',categoriaGetById)

router.get('/',categoriaGet)

router.post('/',categoriaPost)

router.put('/:id',categoriaPut) 

router.put('/activar/:id',categoriaPutActivar) 

router.put('/desactivar/:id',categoriaPutDesactivar) 

router.delete('/:id',categoriaDelete)

export default router;
