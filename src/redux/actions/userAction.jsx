export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const userLoginAction = user => {
    return {
        type: USER_LOGIN,
        payload: user
    }
}

export const userLogoutAction = () => {
    return {
        type: USER_LOGOUT,
    }
}