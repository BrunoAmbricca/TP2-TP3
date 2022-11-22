import express from 'express'
import controller from '../controller/libros.js'


const router = express.Router()

/* GET Libro/s */
router.get('/:id?', controller.getLibros)

/* POST Libro */
router.post('/', controller.postLibro)

/* PUT Libro */
router.put('/:id', controller.putLibro)

/* DELETE Libro */
router.delete('/:id', controller.deleteLibro)


export default router