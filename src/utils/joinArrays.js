export const joinArrays = (qArray,ansArray) => {
    let i = 0
    let newArray = []
    for (i = 0; i < 10; i++) {
        let obj = {
            index:i,
            question: qArray[i],
            answer: ansArray[i]
        }
        newArray.push(obj)
    }
    return newArray
}