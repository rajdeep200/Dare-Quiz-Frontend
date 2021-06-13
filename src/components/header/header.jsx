import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./header.css";
import { logout, login } from "../../redux/actions/userActions";
import { Link } from "react-router-dom";

const Header = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const loginHandler = () => {
    dispatch(login());
  };

  return (
    <div className="header">
      <Link to="/" style={{textDecoration:"none"}} >
        <div className="header__left">I Dare You</div>
      </Link>
      <div className="header__right">
        {userInfo ? (
          <>
            <Link to="/profile">
              <button className="app__button">Profile</button>
            </Link>
            <button className="app__button" onClick={logoutHandler}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="app__button" onClick={loginHandler}>
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
