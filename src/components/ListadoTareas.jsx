import React, { Fragment } from 'react'
import Tarea from './Tarea'

const ListadoTareas = ({ edit, deleteTag, taskList }) => {


    return (
        <Fragment>
            {taskList.length===0 ? <div>No hay Tareas</div> : null}
            {taskList.map(task => 
                <Tarea key={task.id}
                    task={task}
                    edit={edit}
                    deleteTag={deleteTag}
                    />
            )}
        </Fragment>
    )
}

export default ListadoTareas
