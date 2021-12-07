import axios from "axios"

export const sendAnswer = async (answers,userID,sender) => {
    try {
        if(sender === ""){
            sender = "unknown user"
        }
        console.log(answers,userID,sender)
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }

        const {data} = await axios.post("https://fathomless-dawn-44469.herokuapp.com/answers",{answers,userID,sender},config)
        console.log(data)
        return data


    } catch (error) {
        console.log(error)
    }
}