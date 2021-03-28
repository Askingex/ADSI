import {Router} from 'express'
import categoriaPost from '../controllers/categoria.js'

const router = Router();


// router.get('/')

router.post('/',categoriaPost)

// router.put('/') 

// router.put('/activar') 

// router.put('/desactivar') 

// router.delete('/')

export default Router;
