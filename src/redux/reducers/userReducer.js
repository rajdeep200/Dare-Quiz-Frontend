export const userRegisterReducer = (state={}, {type, payload}) => {
    switch(type){
        case "USER_REGISTER_REQUEST":
            return {loading:true}
        case "USER_REGISTER_SUCCESS":
            return {loading:false, userInfo: payload}
        case "USER_REGISTER_FAILS":
            return {loading:false, error: payload}
        default:
            return state
    }
}

export const userLoginReducer = (state={}, {type,payload}) => {
    switch(type){
        case "USER_LOGIN_REQUEST":
            return {loading:true}
        case "USER_LOGIN_SUCCESS":
            return {loading:false, userInfo: payload}
        case "USER_LOGIN_FAIL":
            return {loading:false, error: payload}
        case "LOGOUT":
            return {}
        default:
            return state
    }
}