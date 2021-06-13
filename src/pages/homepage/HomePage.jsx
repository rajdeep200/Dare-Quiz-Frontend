import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/userActions";
import { getQuestions } from "../../redux/actions/questionActions";
import "./HomePage.css"

const HomePage = ({history}) => {
    const dispatch = useDispatch()
    dispatch(getQuestions())
    // const userLogin = useSelector(state => state.userLogin)
    // const {userInfo} = userLogin
    const [name, setName] = useState("")
  
    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(registerUser(name))
      history.push("/quiz")
      setName("")
    };

  return (
    <div className="app__container">
        <h1>Friendship Dare 2021</h1>
        <div className="home__picture">
          <img src="https://i.ibb.co/dGHMvN4/handshake.png" alt="Friendship Dare 2021" />
        </div>
        <h3 className="app__instructions">-: Instructions :-</h3>
        <ol>
          <li>Enter your name</li>
          <li>Create your own friendship dare in 2021</li>
          <li>Your dare link will be ready</li>
          <li>Share the link with your friends</li>
          <li>Your friends will answer your questions</li>
          <li>Read their answers in your profile</li>
        </ol>
        <div className="app__formcontainer">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              className="app__input"
              name="name"
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <button type="submit" className="app__btn">
              <i className="fa fa-hand-point-right"></i>
              <div className="enter__txt">Enter</div>
              <i class="fa fa-hand-point-left"></i>
            </button>
          </form>
        </div>
      
    </div>
  );
};



export default HomePage

