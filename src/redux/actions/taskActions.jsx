export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const CANCEL_EDITINIG = 'CANCEL_EDITINIG'

export const addTaskAction = (description) => {
    return {
        type: ADD_TASK,
        payload: description
    }
}

export const editTaskAction = (id) => {
    return {
        type: EDIT_TASK,
        payload: id
    }
}

export const updateTaskAction = (description) => {
    return {
        type: UPDATE_TASK,
        payload: description
    }
}


export const deleteTaskAction = (id) => {
    return {
        type:DELETE_TASK,
        payload: id
    }
}

export const cancelEditingAction = () => {
    return {
        type: CANCEL_EDITINIG
    }
}