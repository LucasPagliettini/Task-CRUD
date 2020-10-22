import React, { Fragment } from 'react'
import Tarea from './Tarea'
import { useSelector } from 'react-redux';

const ListadoTareas = () => {

    const taskState = useSelector(state => state.taskReducer);
    const {taskList} = taskState;

    return (
        <Fragment>
            {taskList.length===0 ? <div>No hay Tareas</div> : null}
            {taskList.map(task => 
                <Tarea key={task.id}
                    task={task}
                    />
            )}
        </Fragment>
    )
}

export default ListadoTareas
