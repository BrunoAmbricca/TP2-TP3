import api from '../api/libros.js'


const getLibros = (req,res) => {
    const { id } = req.params
    res.json( api.obtenerLibros(id) )
}

const postLibro = (req,res) => {
    const libro = req.body
    res.json(api.guardarLibro(libro))
}

const putLibro = (req,res) => {
    const { id } = req.params
    const libro = req.body
   
    res.json(api.actualizarLibro(libro,id))
}

const deleteLibro = (req,res) => {
    const { id } = req.params
   
    res.json(api.eliminarLibro(id))
}


export default {
    getLibros,
    postLibro,
    putLibro,
    deleteLibro
}