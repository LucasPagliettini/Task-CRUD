const { USER_LOGIN, USER_LOGOUT } = require("../actions/userAction");

const defaultUserState = {name: null};

const userReducer = (state = defaultUserState, action) => {
    switch(action.type){
        case USER_LOGIN:
            return {...state, name:action.payload};
        case USER_LOGOUT:
            return {...state, name:null};
        
        default:
            return state;
    }
}

export default userReducer