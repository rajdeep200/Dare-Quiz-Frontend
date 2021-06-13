import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";

import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";
import { questionReducer,creatorReducer } from "./reducers/questionreducer";
import { answerReducer,answersReducer } from "./reducers/answerReducer";

const reducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    question: questionReducer,
    answer: answerReducer,
    answers: answersReducer,
    creator: creatorReducer
})

const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
const answerListFromStorage = localStorage.getItem("answers") ? JSON.parse(localStorage.getItem("answers")) : []
const questionsFromStorage = localStorage.getItem("questions") ? JSON.parse(localStorage.getItem("questions")) : []
const creatorFromStorage = localStorage.getItem("creatorName") ? JSON.parse(localStorage.getItem("creatorName")) : ""

const initialState = {
    userLogin:{
        userInfo: userInfoFromStorage
    },
    answers:{
        answerList: answerListFromStorage
    },
    question:{
        questions: questionsFromStorage
    },
    creator:{
        name: creatorFromStorage
    }
}
const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
export default store