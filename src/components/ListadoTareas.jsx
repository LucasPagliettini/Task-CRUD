import React, { Fragment } from 'react'

const ListadoTareas = (props) => {


    return (
        <Fragment>
            {props.taskList.length===0 ? <div>No hay Tareas</div> : <div></div>}
            {props.taskList.map(task => 
                    <div key={task.id}>
                        <li>{task.id} - {task.task}</li>
                        <button onClick={() => props.edit(task.id)}>Editar</button>
                        <button onClick={() => props.deleteTag(task.id)}>Eliminar</button>    
                    </div>
            )}
        </Fragment>
    )
}

export default ListadoTareas
