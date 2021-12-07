import React, { useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import "./QuizPage.css";

const Quiz = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const questionList = useSelector((state) => state.question);
  const { questions } = questionList;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const newQuestions = questions.map((question) => question.qText.toString());

  const nextQuestionHandler = (e) => {
    e.preventDefault();
    if (currentQuestion + 1 < newQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentQuestion + 1 === newQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      history.push("/profile");
    } else {
      alert("success");
    }
  };
  return (
    <div>
      <h2 className="upper__heading">Q: {currentQuestion + 1}/10</h2>
      {userInfo ? (
        <div className="quizpage">
          <h2 className="quizpage__question">
            {newQuestions[currentQuestion].replace("USER", userInfo.name)}
          </h2>
          <button
            type="submit"
            className="quiz__button"
            onClick={nextQuestionHandler}
          >
            Next
          </button>
        </div>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Quiz;
