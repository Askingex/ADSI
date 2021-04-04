import { Router } from 'express'
import { check } from 'express-validator'
import { ventaDelete, ventaGet, ventaGetById, ventaPost, ventaPut, ventaPutActivar, ventaPutDesactivar } from '../controllers/venta.js'
import { existeVentaById, existeVentaByNombre } from '../helpers/db-venta.js'
import validarCampos from '../middlewares/validar-campos.js';
import { validarRol } from '../middlewares/validar-rol.js';
import { validarJWT } from '../middlewares/validar-token.js';


const router = Router();

router.get('/', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    validarCampos
], ventaGet)

router.get('/:id', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'No es ID valido').isMongoId(),
    check('id').custom(existeVentaById),
    validarCampos
], ventaGetById)

router.post('/', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existeVentaByNombre),
    validarCampos
], ventaPost)

router.put('/:id', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'No es ID valido').isMongoId(),
    check('id').custom(existeVentaById),
    check('nombre').custom(existeVentaByNombre),
    validarCampos
], ventaPut)

router.put('/activar/:id', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'No es ID valido').isMongoId(),
    check('id').custom(existeVentaById),
    validarCampos
], ventaPutActivar)

router.put('/desactivar/:id', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeVentaById),
    validarCampos
], ventaPutDesactivar)

router.delete('/:id', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'No es ID valido').isMongoId(),
    check('id').custom(existeVentaById),
    validarCampos
], ventaDelete)

export default router;