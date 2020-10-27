const { USER_LOGIN, USER_LOGOUT } = require("../actions/userAction");

const defaultUserState = "";

const userReducer = (state = defaultUserState, action) => {
    switch(action.type){
        case USER_LOGIN:
            return action.payload;
        case USER_LOGOUT:
            return "";
        
        default:
            return state;
    }
}

export default userReducer