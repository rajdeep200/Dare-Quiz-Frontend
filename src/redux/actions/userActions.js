import axios from "axios";

export const registerUser = (name) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_REGISTER_REQUEST",
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://dare-quiz-2022-by-rajdeep.herokuapp.com/users",
      { name },
      config
    );
    console.log(data);
    dispatch({
      type: "USER_REGISTER_SUCCESS",
      payload: data,
    });

    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const login = (userID, password) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_LOGIN_REQUEST",
    });

    const config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://dare-quiz-2022-by-rajdeep.herokuapp.com/login",
      { userID, password },
      config
    );
    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload: error,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("questions");
  localStorage.removeItem("answers");
  dispatch({ type: "LOGOUT" });
};

export const deleteUserAccount = (userID, token) => async (dispatch) => {
  try {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("questions");
    localStorage.removeItem("answers");
    dispatch({
      type: "LOGOUT",
    });

    const config = {
      Headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.delete(
      `https://dare-quiz-2022-by-rajdeep.herokuapp.com/${userID}`,
      config
    );

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
