const libros = [
    { id: '1', titulo: 'Caperucita Roja', autor: 'Juan' , año: 1980},
    { id: '2', titulo: 'Batman', autor: 'Marcelo' , año: 1990},
]

const findLibro = id => {
    return libros.find(libro => libro.id == id)    
}

const findLibros = ()  => {
    return libros
}

const saveLibro = libro => {
    libro.año = parseInt(libro.año)
    
    const id = parseInt(libros[libros.length-1].id) + 1
    libro.id = String(id)

    libros.push(libro)

    return libro    
}

const updateLibro = (libro,id) => {   
    libro.id = id
    const index = libros.findIndex(libro => libro.id == id)
    libros.splice(index, 1, libro)

    return libro    
}

const deleteLibro = id => {
    const index = libros.findIndex(libro => libro.id == id)

    const libro = libros.splice(index, 1)[0]
    
    return libro    
}

export default {
    findLibro,
    findLibros,
    saveLibro,
    updateLibro,
    deleteLibro
}
