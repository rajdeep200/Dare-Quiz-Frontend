import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import LoginPage from "./pages/loginPage/LoginPage";
import Header from "./components/header/header";
import ProfilePage from "./pages/profilePage/ProfilePage";
import ClientQuizPage from "./pages/clientQuiz/ClientQuizePage";
import NextPage from "./pages/nextPage/NextPage";
import AnswerPage from "./pages/answerPage/AnswerPage";
import PrivacyPage from "./pages/privacyPage/privacyPage";
import TermsPage from "./pages/terms&Condition/terms";
import AboutPage from "./pages/about/about";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Route path="/" component={HomePage} exact />
          <Route path="/quiz" component={QuizPage} exact />
          <Route path="/login" component={LoginPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/quiz/:id" component={ClientQuizPage} />
          <Route path="/next" component={NextPage} />
          <Route path="/privacy-policy" component={PrivacyPage} />
          <Route path="/terms-and-conditions" component={TermsPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/answers/:id" component={AnswerPage} />
        </main>
      </Router>
    </>
  );
}

export default App;
