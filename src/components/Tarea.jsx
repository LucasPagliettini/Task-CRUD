import React from 'react'
import { editTaskAction, deleteTaskAction } from '../redux/actions/taskActions';
import { useDispatch } from 'react-redux';

const Tarea = ({task}) => {
    
    const dispatch = useDispatch();

    return (
        <>
            <li>{task.description}</li>
            <button onClick={() => dispatch(editTaskAction(task.id))}>Editar</button>
            <button onClick={() => dispatch(deleteTaskAction(task.id))}>Eliminar</button>    
        </>
    )
}

export default Tarea
