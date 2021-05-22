import { Router } from 'express'
import { check } from 'express-validator'
import { compraDelete, compraGet, compraGetById, compraPost, compraPut, compraPutActivar, compraPutDesactivar } from '../controllers/compra.js'
import { existeCompraById, existeCompraByNombre } from '../helpers/db-compra.js'
import validarCampos from '../middlewares/validar-campos.js'
import { validarRol } from '../middlewares/validar-rol.js'
import { validarJWT } from '../middlewares/validar-token.js'



const router = Router();

router.get('/', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    validarCampos
], compraGet)

router.get('/:id', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'No es ID valido').isMongoId(),
    check('id').custom(existeCompraById),
    validarCampos
], compraGetById)

router.post('/', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    validarCampos
], compraPost)

router.put('/:id', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'No es ID valido').isMongoId(),
    check('id').custom(existeCompraById),
    check('nombre').custom(existeCompraByNombre),
    validarCampos
], compraPut)

router.put('/activar/:id', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'No es ID valido').isMongoId(),
    check('id').custom(existeCompraById),
    validarCampos
], compraPutActivar)

router.put('/desactivar/:id', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeCompraById),
    validarCampos
], compraPutDesactivar)

router.delete('/:id', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'No es ID valido').isMongoId(),
    check('id').custom(existeCompraById),
    validarCampos
], compraDelete)

export default router;