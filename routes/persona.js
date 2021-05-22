import { Router } from 'express'
import { check } from 'express-validator'
import { personaDelete, personaGet, personaGetById, personaPost, personaPut, personaPutActivar, personaPutDesactivar,personaGetProveedores,personaGetClientes } from '../controllers/persona.js'
import { existePersonaById, existePersonaByNombre } from '../helpers/db-persona.js'
import validarCampos from '../middlewares/validar-campos.js';
import { validarRol } from '../middlewares/validar-rol.js';
import { validarJWT } from '../middlewares/validar-token.js';


const router = Router();

router.get('/', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    validarCampos
], personaGet)
router.get('/proveedores', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    validarCampos
], personaGetProveedores)
router.get('/clientes', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    validarCampos
], personaGetClientes)

router.get('/:id', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'No es ID valido').isMongoId(),
    check('id').custom(existePersonaById),
    validarCampos
], personaGetById)

router.post('/', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existePersonaByNombre),
    validarCampos
], personaPost)

router.put('/:id', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'No es ID valido').isMongoId(),
    check('id').custom(existePersonaById),
    check('nombre').custom(existePersonaByNombre),
    validarCampos
], personaPut)

router.put('/activar/:id', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'No es ID valido').isMongoId(),
    check('id').custom(existePersonaById),
    validarCampos
], personaPutActivar)

router.put('/desactivar/:id', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existePersonaById),
    validarCampos
], personaPutDesactivar)

router.delete('/:id', [
    validarJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'No es ID valido').isMongoId(),
    check('id').custom(existePersonaById),
    validarCampos
], personaDelete)

export default router;