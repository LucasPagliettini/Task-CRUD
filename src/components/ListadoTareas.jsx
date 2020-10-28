import React, { Fragment } from 'react'
import Tarea from './Tarea'
import { useSelector } from 'react-redux';

const ListadoTareas = () => {

    const globalState = useSelector(state => state);
    const {taskList} = globalState.taskReducer;
    const currentUser = globalState.userReducer.name;
    const currentUserTaskList = taskList.filter(iter => iter.user===currentUser)


    return (
        <Fragment>
            {currentUserTaskList.length===0 ? <div>No hay Tareas</div> : null}
            {currentUserTaskList.map(task => 
                <Tarea key={task.id}
                    task={task}
                    />
            )}
        </Fragment>
    )
}

export default ListadoTareas
