import React from "react";
import "./NextPage.css";

const NextPage = ({ history }) => {
  return (
    <>
      <div className="container">
        <h3 className="msg__container">Your answers were sent successfully</h3>
        <div className="inner__container">
          <center>
            <img
              src="https://i.ibb.co/7QsZT3z/high-five.png"
              alt="friendship dare 2021"
            />
          </center>
          <h3>Create your own Dare Quiz</h3>
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
          <button onClick={() => history.push("/")} className="next__btn">
            <i className="fa fa-hand-point-right"></i>
            <div className="next__btnTxt">CREATE NOW</div>
            <i class="fa fa-hand-point-left"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default NextPage;
