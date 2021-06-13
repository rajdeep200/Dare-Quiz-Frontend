import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import QnA from "../../components/Q&A/QnA";
import { joinArrays } from "../../utils/joinArrays";
import "./AnswerPage.css"

const AnswerPage = ({history, match}) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if(!userInfo){
      history.push("/login")
    }
  }, [history,userInfo])

  const questionList = useSelector(state => state.question)
  const {questions} = questionList
  console.log(questions)
  
  const newQuestions = userInfo ? questions.map(question => (
    question.qText.toString().replace("USER",userInfo.name)
  )) : []
  
  console.log(newQuestions)

  const answers = useSelector((state) => state.answers);
  const { answerList } = answers;
  const newAnswerList = answerList.filter(answer => answer._id === match.params.id)
  const userAnswers = newAnswerList[0].answers
  console.log(userAnswers)

  const newArray = joinArrays(newQuestions,userAnswers)
  console.log(newArray)

  return (
      <div className="answer__page">
          {
              newArray.map(obj => (
                  <QnA key={obj.index} question={obj.question} answer={obj.answer} />
              ))
          }
      </div>
  );
};

export default AnswerPage;
