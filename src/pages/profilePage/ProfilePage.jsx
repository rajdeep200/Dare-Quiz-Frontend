import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ImWhatsapp } from "react-icons/im";
import { GiCheckMark } from "react-icons/gi";
import {
  FaFacebookMessenger,
  FaInstagram,
  FaFacebook,
  FaSnapchat,
  FaTwitter,
  FaRegCopy,
} from "react-icons/fa";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { getAnswer } from "../../redux/actions/answerActions";
import "./ProfilePage.css";
import { getQuestions } from "../../redux/actions/questionActions";
import { deleteUserAccount } from "../../redux/actions/userActions";
import Loader from "../../components/Loader/Loader";

const ProfilePage = ({ history }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [copied, setCopied] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const answers = useSelector((state) => state.answers);
  const { answerList } = answers;
  const [value, setValue] = useState("");

  if (copied) {
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      dispatch(getQuestions());
      dispatch(getAnswer(userInfo.userID));
      setValue(`${window.location.origin}/quiz/${userInfo.userID}`);
    }
  }, [history, userInfo, dispatch]);

  // const getQuestionsHandler = () => {
  //   dispatch(getQuestions());
  // };

  const deleteUserHandler = () => {
    dispatch(deleteUserAccount(userInfo.userID, userInfo.token));
  };

  return (
    <div>
      {userInfo ? (
        <div className="show__details">
          <Accordion>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              expandIcon={<VisibilityIcon />}
            >
              <div className="summary">
                <div className="summary__heading">Show Login Details</div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="details">
                <div className="details__login">
                  <p className="details__id">
                    <div style={{ fontSize: "17px" }}>User ID: </div>
                    {userInfo.userID}{" "}
                  </p>
                  <p className="details__password">
                    <div style={{ fontSize: "17px" }}>Password: </div>
                    {userInfo.password}{" "}
                  </p>
                </div>
                <p className="details__notice">
                  Make a screenshot of this details. Once you lost your password
                  then it can't be restored.
                </p>
                <Accordion>
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <div className="summary">
                      <div className="summary__heading">Settings</div>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="delete__container">
                      <p className="delete__heading">
                        Do you want to delete your account?
                      </p>
                      <button
                        className="delete__btn"
                        onClick={deleteUserHandler}
                      >
                        Delete
                      </button>
                      <p className="delete__notice">
                        Remember once you delete your account, your data will be
                        completely deleted. There is no way of restoring your
                        data back.
                      </p>
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      ) : (
        <div>Login</div>
      )}
      <center>
        {copied ? (
          <div className="copied">
            <GiCheckMark size="20px" color="white" />
            <span>Copied Successfully</span>
          </div>
        ) : (
          <></>
        )}

        <div className="copy__container">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="input__link"
          />
          <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
            <button className="copy__button">
              <FaRegCopy size="20px" color="white" />
              <span>Click To Copy</span>
            </button>
          </CopyToClipboard>
        </div>
        {userInfo ? (
          <>
            <div className="wpstory__link">
              <button
                className="wp__button"
                onClick={`whatsapp://send?text=🙋‍♂️Hey!!! ${userInfo.name} have got a fun dare challenge for you🎉🎉🎉 Accept it by clicking this link`}
              >
                <ImWhatsapp size="30px" />
                <span>Add To Story</span>
              </button>
            </div>
            <div className="messenger__link">
              <button className="messenger__button">
                <FaFacebookMessenger size="30px" />
                <span>Share</span>
              </button>
            </div>
            <div className="grid__container">
              <Grid container spacing={3}>
                <Grid item xs={3} className="insta__container" spacing={3}>
                  <FaInstagram size="30px" color="white" />
                </Grid>
                <Grid item xs={3} className="fb__container">
                  <FaFacebook size="30px" color="white" />
                </Grid>
                <Grid item xs={3} className="snap__container">
                  <FaSnapchat size="30px" color="black" />
                </Grid>
                <Grid item xs={3} className="twit__container">
                  <FaTwitter size="30px" color="white" />
                </Grid>
              </Grid>
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </center>
      <div className="timeline_container">
        <div className="timeline__heading">Your Timeline</div>
        {answerList ? (
          <div className="table__container">
            {answerList.length < 1 ? (
              <div className="noAnswer__received">You didn't receive any answers yet</div>
            ) : (
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow style={{ backgroundColor: "#ff0066" }}>
                      <TableCell>
                        <div className="table__heading">Name</div>
                      </TableCell>
                      <TableCell>
                        <div className="table__heading">Answers</div>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody style={{ backgroundColor: "#b3ffff" }}>
                    {answerList.map((answer) => (
                      <TableRow key={answer._id}>
                        <TableCell>
                          <div className="sender__name">{answer.sender}</div>
                        </TableCell>
                        <TableCell>
                          <Link to={`/answers/${answer._id}`}>
                            <div
                              className="show__answer"
                            >
                              Show <DoubleArrowIcon />{" "}
                            </div>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </div>
        ) : (
          <div className="loader__container">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};
// http://localhost:3000/quiz?id=Ede126045
export default ProfilePage;
