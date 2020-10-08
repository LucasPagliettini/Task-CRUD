import React from 'react'

import { useForm } from 'react-hook-form'

const Formulario = (props) => {
    
    const {register, errors, handleSubmit, setValue, getValues} = useForm();

    const iniciando = getValues('task')==="" ? true : false;
    
    iniciando? (props.editing? setValue('task', props.selectedTask.task) : console.log("Formulario espera tarea")): console.log("Formulario tiene tarea")

    const agregar = (data, e) => {
        console.log(data.task)
        e.preventDefault();
        props.addTask(data.task);
        setValue('task', "")

    }

    const prevenir = (e) => e.preventDefault();
    
    const cancelar = (e) => {

        props.setEditing(false);
        setValue('task', "");
    }

    const update = (data, e) => {
        e.preventDefault();
        props.update(data);
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
                    props.editing? 
                        (<div>
                            <button onClick={handleSubmit(update)}>Guardar Cambios</button>
                            <button onClick={cancelar}>Cancelar</button>
                        </div>)
                    : 
                        (<button onClick={handleSubmit(agregar)}>Agregar Tarea</button>)
                }
            </form>
        </div>
    )
}

export default Formulario
