import { Router } from 'express'
import { check } from 'express-validator'
import { categoriaGet, categoriaPost, categoriaGetById, categoriaPut, categoriaPutActivar, categoriaPutDesactivar, categoriaDelete } from '../controllers/categoria.js'
import { existeCategoriaById, existeCategoriaByNombre } from '../helpers/db-categoria.js';
import validarCampos from '../middlewares/validar-campos.js';
import { validarJWT } from '../middlewares/validar.token.js';


const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
], categoriaGet)

router.get('/:id',[
    validarJWT,
    check('id','No es ID valido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validarCampos
], categoriaGetById)

router.post('/',[
    validarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existeCategoriaByNombre),
    validarCampos
], categoriaPost)

router.put('/:id',[
    validarJWT,
    check('id','No es ID valido').isMongoId(),
    check('id').custom(existeCategoriaById),
    check('nombre').custom(existeCategoriaByNombre),
    validarCampos
], categoriaPut)

router.put('/activar/:id',[
    validarJWT,
    check('id','No es ID valido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validarCampos
], categoriaPutActivar)

router.put('/desactivar/:id',[
    validarJWT,
    check('id','No es ID valido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validarCampos
], categoriaPutDesactivar)

router.delete('/:id',[
    validarJWT,
    check('id','No es ID valido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validarCampos
], categoriaDelete)

export default router;
