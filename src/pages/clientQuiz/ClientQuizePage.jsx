import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, Button } from "react-bootstrap";
import { getQuestions } from "../../redux/actions/questionActions";
import { saveAnswer, clearAnswer } from "../../redux/actions/answerActions";
import { sendAnswer } from "../../utils/sendAnswers";
import { getCreatorName } from "../../redux/actions/questionActions";
import Footer from "../../components/footer/footer";
import "./ClientQuiz.css";

const ClientQuizePage = ({ history, match }) => {
  const dispatch = useDispatch();
  const quizCreatorID = match.params.id;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(quizCreatorID);

  useEffect(() => {
    setShow(true);
    dispatch(getQuestions());
    dispatch(getCreatorName(quizCreatorID));
  }, [dispatch, history, userInfo, quizCreatorID]);

  const answerList = useSelector((state) => state.answer);
  const { answers } = answerList;

  const creator = useSelector((state) => state.creator);
  const creatorName = creator.name;
  console.log(creatorName);

  const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  const questionList = useSelector((state) => state.question);
  const { questions } = questionList;
  const newQuestions = questions.map((question) =>
    question.qText.toString().replace("USER", creatorName)
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");

  const handleClose = () => setShow(false);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setShow(false);
    console.log(name);
  };

  const nextQuestionHandler = (e) => {
    e.preventDefault();
    if (currentQuestion + 1 <= newQuestions.length) {
      dispatch(saveAnswer(answer));
      setCurrentQuestion(currentQuestion + 1);
      setAnswer("");
    }
  };

  const sendToDb = () => {
    console.log(answers);
    sendAnswer(answers, quizCreatorID, name);
    dispatch(clearAnswer());
    history.push("/next");
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Form onSubmit={formSubmitHandler}>
            <Form.Group>
              <Form.Label>Name: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Enter
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      {currentQuestion + 1 < 11 ? (
        <div className="question__container">
          <h2 className="upper__heading">Q: {currentQuestion + 1}/10</h2>
          <div className="quizpage">
            <h2 className="quizpage__question">
              {newQuestions[currentQuestion]}
            </h2>
            <textarea
              name="answer"
              className="quizpage__answer"
              placeholder="Enter your answer..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
            ></textarea>
            <div
              className="no__answer"
              onClick={() => setAnswer("I don't have an answer")}
            >
              I don't have an answer
            </div>
            <button
              type="submit"
              className="quizpage__button"
              onClick={nextQuestionHandler}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="send__answer">
          <div className="send__heading">Click Below To Send Your Answers</div>
          <div className="send__image">
            <img
              src="https://i.ibb.co/C820KyF/friendship-2.png"
              alt="friendship dare 2021"
            />
          </div>
          <div className="arrows">
            <img
              src="https://i.ibb.co/cyY6x3z/pointing-down.png"
              alt="friendship dare quiz 2021"
            />
            <img
              src="https://i.ibb.co/cyY6x3z/pointing-down.png"
              alt="friendship dare quiz 2021"
            />
            <img
              src="https://i.ibb.co/cyY6x3z/pointing-down.png"
              alt="friendship dare quiz 2021"
            />
          </div>
          <button className="send__btn" onClick={sendToDb}>
            <i className="fa fa-hand-point-right"></i>
            <div className="send__btnText">Send</div>
            <i class="fa fa-hand-point-left"></i>
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ClientQuizePage;
