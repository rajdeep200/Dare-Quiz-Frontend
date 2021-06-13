import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/userActions";
import "./LoginPage.css";
import Loader from "../../components/Loader/Loader";

const LoginPage = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;
  const dispatch = useDispatch();
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login(userID, password));
    history.push("/profile");
  };
  useEffect(() => {
    if (userInfo) {
      history.push("/profile");
    }
  }, [history, userInfo]);

  return (
    <div>
      {error ? (
        <div className="failed__container">
          <div className="failed__header">Login Failed</div>
          <div className="failed__message">
            Maybe your user id or password was incorrect. Try again with the
            correct ones.
          </div>
        </div>
      ) : null}
      <div className="login__container">
        {loading ? (
          <>
            <Loader />
          </>
        ) : (
          <div className="login__formcontainer">
            <form onSubmit={loginHandler}>
              <input
                type="text"
                className="login__input"
                name="User ID"
                placeholder="Enter User ID..."
                value={userID}
                onChange={(e) => setUserID(e.target.value)}
                required
              />
              <br />
              <br />
              <input
                type="text"
                className="login__input"
                name="Password"
                placeholder="Enter Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br />
              <br />
              <button type="submit" className="login__btn">
                Login
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
