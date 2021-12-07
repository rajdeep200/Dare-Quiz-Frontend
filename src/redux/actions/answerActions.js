import axios from "axios";

export const saveAnswer = (answer) => async (dispatch) => {
  if (answer === "") {
    answer = "I don't have an answer";
  }
  dispatch({
    type: "SAVE_ANSWER",
    payload: answer,
  });
};

export const clearAnswer = () => async (dispatch) => {
  dispatch({
    type: "CLEAR_ANSWER",
  });
};

export const getAnswer = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "GET_ANSWER_REQUEST",
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `https://dare-quiz-by-rajdeep.herokuapp.com/${id}`,
      config
    );

    dispatch({
      type: "GET_ANSWER_SUCCESS",
      payload: data,
    });

    localStorage.setItem("answers", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "GET_ANSWER_FAIL",
    });
  }
};
