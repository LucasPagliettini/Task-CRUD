import React from 'react'

const Tarea = ({task, edit, deleteTag}) => {
    return (
        <>
            <li>{task.task}</li>
            <button variant="contained" color="primary" onClick={() => edit(task.id)}>Editar</button>
            <button onClick={() => deleteTag(task.id)}>Eliminar</button>    
        </>
    )
}

export default Tarea
