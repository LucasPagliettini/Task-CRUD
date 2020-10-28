import React from 'react'
import TaskComponents from './TaskComponents';
import UserLogin from './UserLogin';
import { useSelector } from 'react-redux';

const Appp = () => {
    const currentUser = useSelector(state => state.userReducer.name);
    const logued = currentUser !== null ? true : false;

    return (
        <div>
            {logued ? <TaskComponents/> : <UserLogin/>}
        </div>
    )
}

export default Appp
