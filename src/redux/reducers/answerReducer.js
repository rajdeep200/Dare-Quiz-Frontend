export const answerReducer = (state={ answers:[] }, {type,payload}) => {
    switch(type){
        case "SAVE_ANSWER":
            const answer = payload
            return {
                ...state,
                answers: [...state.answers, answer]
            }
        case "CLEAR_ANSWER":
            return { answers:[] }
        default:
            return state
    }
}

export const answersReducer = (state={ answerList:[]}, {type,payload}) => {
    switch(type){
        case "GET_ANSWER_REQUEST":
            return {loading:true}
        case "GET_ANSWER_SUCCESS":
            return {loading:false, answerList:payload}
        case "GET_ANSWER_FAIL":
            return {loading:false, error:payload}
        default:
            return state
    }
}