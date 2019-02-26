
const initState = {
    authErr: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authErr: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authErr: null
            }
        case 'SIGNOUT_SUCESS':
            return state
        default:
            return state
    }

}
export default authReducer