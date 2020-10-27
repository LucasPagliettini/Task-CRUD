import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { userLoginAction } from '../redux/actions/userAction';

const UserLogin = () => {

    const {register, errors, handleSubmit} = useForm();
    const dispatch = useDispatch();

    const getIn = (data, e) => {
        e.preventDefault();
        const user = data.user;
        dispatch(userLoginAction(user))
    }

    return (
        <div>
            <h4>Ingreso de Usuario</h4>
            <input
                    type="text" 
                    name="user"
                    placeholder="Ingrese su nombre"
                    ref={register({
                        required: {
                            value: true, 
                            message: 'Debe ingresar su nombre'
                            }, 
                        minLength: {
                            value: 3, 
                            message: 'Minimo 3 carácteres!'
                            }
                    })}/>
                <div>
                    {errors?.user?.message}
                </div>
                <div>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={handleSubmit(getIn)}>
                        Ingresar
                    </Button>
                </div>
        </div>
    )
}

export default UserLogin
