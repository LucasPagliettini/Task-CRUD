import React, { Fragment } from 'react'
import Formulario from './Formulario'
import ListadoTareas from './ListadoTareas'
import { useSelector, useDispatch } from 'react-redux'
import { userLogoutAction } from '../redux/actions/userAction'

const TaskComponents = () => {

    const currentUser=useSelector(state => state.userReducer.name);
    const dispatch = useDispatch();

    return (
        <Fragment>
            <h6>Bienvenido {currentUser}</h6>
            <button onClick={() => dispatch(userLogoutAction())}>Logout</button>
            <h4>Anotador de tareas</h4>
            <Formulario/>
            <h4>Listado</h4>
            <ListadoTareas/> 
        </Fragment>
    )
}

export default TaskComponents
