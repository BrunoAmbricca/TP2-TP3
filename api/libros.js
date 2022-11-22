import model from '../model/libros.js'

const obtenerLibros = id => {
    return id? model.findLibro(id) : model.findLibros()
}

const guardarLibro = libro => {
    return model.saveLibro(libro)
}

const actualizarLibro = (libro,id) => {
    return model.updateLibro(libro,id)
}

const eliminarLibro = id => {
    return model.deleteLibro(id)
}


export default {
    obtenerLibros,
    guardarLibro,
    actualizarLibro,
    eliminarLibro
}