export const questionReducer = (state={ questions:[] }, {type, payload}) => {
    switch(type){
        case "GET_QUESTIONS_REQUEST":
            return {loading:true, questions:[]}
        case "GET_QUESTIONS_SUCCESS":
            return {loading:false, questions:payload }
        case "GET_QUESTIONS_FAIL":
            return {loading:false, error:payload}
        default:
            return state
    }
}

export const creatorReducer = (state={name:""}, {type, payload}) => {
    switch(type){
        case "GET_CREATOR_NAME_REQUEST":
            return {loading:true, name:""}
        case "GET_CREATOR_NAME_SUCCESS":
            return {loading:false, name:payload }
        case "GET_CREATOR_NAME_FAIL":
            return {loading:false, error:payload}
        default:
            return state
    }
}

