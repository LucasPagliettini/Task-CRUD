import React from 'react'

import { useForm } from 'react-hook-form'

const Formulario = ({ editing, selectedTask, addTask, setEditing, update }) => {
    
    const {register, errors, handleSubmit, setValue, getValues} = useForm();

    const iniciando = getValues('task')==="" ? true : false;
    
    if(iniciando)
        if(editing)
            setValue('task', selectedTask.task);

    const agregar = (data, e) => {
        e.preventDefault();
        addTask(data.task);
        setValue('task', "")

    }

    const prevenir = (e) => e.preventDefault();
    
    const cancelar = (e) => {

        setEditing(false);
        setValue('task', "");
    }

    const updateLoc = (data, e) => {
        e.preventDefault();
        update(data);
        setValue('task', "");
    }
    


    return (
        <div>
            <form onSubmit={prevenir}>
                <label>Tarea</label>
                <input
                    type="text" 
                    name="task"
                    placeholder="Ingrese la tarea"
                    ref={register({
                        required: {
                            value: true, 
                            message: 'Tarea es requerida'
                            }, 
                        minLength: {
                            value: 3, 
                            message: 'Minimo 3 carácteres!'
                            }
                    })}/>
                <div className="danger">
                    {errors?.task?.message}
                </div>
                
                {
                    editing? 
                        <div>
                            <button onClick={handleSubmit(updateLoc)}>Guardar Cambios</button>
                            <button onClick={cancelar}>Cancelar</button>
                        </div>
                    : 
                        <button onClick={handleSubmit(agregar)}>Agregar Tarea</button>
                }
            </form>
        </div>
    )
}

export default Formulario
