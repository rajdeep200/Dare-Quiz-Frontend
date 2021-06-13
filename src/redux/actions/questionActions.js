import axios from "axios"

export const getQuestions = () => async (dispatch) => {
    try {
        dispatch({
            type:"GET_QUESTIONS_REQUEST"
        })
    
        const {data} = await axios.get("/questions")
        dispatch({
            type:"GET_QUESTIONS_SUCCESS",
            payload:data
        })

        localStorage.setItem("questions", JSON.stringify(data))
    } catch (error) {
        dispatch({
            type:"GET_QUESTIONS_FAIL",
            payload:error
        })
    }
}

export const getCreatorName = (id) => async (dispatch) => {
    try {
        dispatch({
            type:"GET_CREATOR_NAME_REQUEST"
        })
        const {data} = await axios.get(`/questions/${id}`)

        dispatch({
            type:"GET_CREATOR_NAME_SUCCESS",
            payload:data
        })

        localStorage.setItem("creatorName",JSON.stringify(data))

    } catch (error) {
        dispatch({
            type:"GET_CREATOR_NAME_FAIL",
            payload:error
        })
    }
}