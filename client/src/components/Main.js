import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserId } from "../redux/result_reducer";

import "../styles/Main.css";

export default function Main() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  function startQuiz() {
    // only allow user to take quiz if inputted email address
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  }

  return (
    <div className="container">
      <h1 className="title text-light">Canadian Trivia Quiz</h1>

      <ol>
        <li>There are 10 questions</li>
        <li>10 points rewarded for each correct answer</li>
        <li>Each question is multiple choice with only 1 correct answer</li>
        <li>You can review and change answers before the quiz finishes</li>
        <li>Results will be declared upon submission</li>
      </ol>

      <form id="form">
        <input
          className="userid"
          ref={inputRef}
          type="text"
          placeholder="Username*"
        />
      </form>

      <div className="start">
        <Link className="btn" to={"quiz"} onClick={startQuiz}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
}
