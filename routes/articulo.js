import { Router } from 'express'
import { check } from 'express-validator'
import { articuloDelete, articuloGet, articuloGetById, articuloPost, articuloPut, articuloPutActivar, articuloPutDesactivar } from '../controllers/articulo.js'
import { existeArticuloById, existeArticuloByNombre } from '../helpers/db-articulo.js'
import validarCampos from '../middlewares/validar-campos.js';
import { validarRol } from '../middlewares/validar-rol.js';
import { validarJWT } from '../middlewares/validar-token.js';


const router = Router();

router.get('/', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    validarCampos
], articuloGet)

router.get('/:id', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'No es ID valido').isMongoId(),
    check('id').custom(existeArticuloById),
    validarCampos
], articuloGetById)

router.post('/', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existeArticuloByNombre),
    validarCampos
], articuloPost)

router.put('/:id', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'No es ID valido').isMongoId(),
    check('id').custom(existeArticuloById),
    check('nombre').custom(existeArticuloByNombre),
    validarCampos
], articuloPut)

router.put('/activar/:id', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'No es ID valido').isMongoId(),
    check('id').custom(existeArticuloById),
    validarCampos
], articuloPutActivar)

router.put('/desactivar/:id', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeArticuloById),
    validarCampos
], articuloPutDesactivar)

router.delete('/:id', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'No es ID valido').isMongoId(),
    check('id').custom(existeArticuloById),
    validarCampos
], articuloDelete)

export default router;