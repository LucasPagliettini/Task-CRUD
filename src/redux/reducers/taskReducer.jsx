import { ADD_TASK, EDIT_TASK, UPDATE_TASK, DELETE_TASK, CANCEL_EDITINIG } from '../actions/taskActions';

const data = localStorage.getItem('localTaskList');
const localTaskList = data!==null ? JSON.parse(data) : [];

const updateLocalTaskList = (list) => {
    localStorage.setItem('localTaskList', JSON.stringify(list));
  }

const taskState = {
    taskList: localTaskList,
    editing: false,
    selectedTask: {}
}

const taskReducer = (state = taskState, action) => {
    let updatedTaskList;
    switch(action.type){
        case ADD_TASK:
            let id;
            let lastPosition = state.taskList.length - 1;
            lastPosition > -1 ? id=state.taskList[lastPosition].id + 1 : id=0;
            let newTask={id, description:action.payload.description, user:action.payload.currentUser};
            updatedTaskList = [...state.taskList, newTask];
            updateLocalTaskList(updatedTaskList);
            return {...state, taskList: updatedTaskList};
        case EDIT_TASK:
            const selectedItem = state.taskList.filter(task => task.id===action.payload);
            return {...state, editing: true, selectedTask: selectedItem[0]};
        case UPDATE_TASK:
            const updatedTask={...state.selectedTask, description:action.payload};
            updatedTaskList=state.taskList.map(iter => iter.id===updatedTask.id ? updatedTask : iter);
            updateLocalTaskList(updatedTaskList);
            return {...state, taskList:updatedTaskList, editing:false, selectedTask:{}}
        case DELETE_TASK:
            updatedTaskList=state.taskList.filter(iter => iter.id!==action.payload);
            updateLocalTaskList(updatedTaskList);
            return {...state, taskList:updatedTaskList}
        case CANCEL_EDITINIG:
            return {...state, editing: false}
        
        default: 
            return state
    }
}

export default taskReducer;

 
