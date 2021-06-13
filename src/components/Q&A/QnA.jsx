import React from "react";
import "./QnA.css";

const QnA = ({ question, answer }) => {
  return (
        <div className="qna__container">
          <div className="q__container">{question}</div>
          <div className="ans__container">{answer}</div>
        </div>
  );
};

export default QnA;
