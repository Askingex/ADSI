import { Router } from 'express'
import { check } from 'express-validator';
import { usuarioGet, usuarioGetById, usuarioPost, usuarioPut, usuarioPutActivar, usuarioPutDesactivar, usuarioDelete, login } from '../controllers/usuario.js'
import { existeUsuarioById, existeUsuarioByNombre } from '../helpers/db-usuario.js';
import validarCampos from '../middlewares/validar-campos.js';
import { validarRol } from '../middlewares/validar-rol.js';
import { validarJWT } from '../middlewares/validar-token.js';

const router = Router();

router.get('/', [
    validarJWT,
    validarRol('ALMACINISTA_ROL'),
    validarCampos
], usuarioGet)

router.get('/:id', [
    validarJWT,
    check('id', 'No es ID valido').isMongoId(),
    check('id').custom(existeUsuarioById),
    validarCampos
], usuarioGetById)

router.post('/', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existeUsuarioByNombre),
    validarCampos
], usuarioPost)

router.post('/login',login)

router.put('/:id', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'No es ID valido').isMongoId(),
    check('id').custom(existeUsuarioById),
    check('nombre').custom(existeUsuarioByNombre),
    validarCampos
], usuarioPut)

router.put('/activar/:id', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'No es ID valido').isMongoId(),
    check('id').custom(existeUsuarioById),
    validarCampos
], usuarioPutActivar)

router.put('/desactivar/:id', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioById),
    validarCampos
], usuarioPutDesactivar)

router.delete('/:id', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'No es ID valido').isMongoId(),
    check('id').custom(existeUsuarioById),
    validarCampos
], usuarioDelete)

export default router;
