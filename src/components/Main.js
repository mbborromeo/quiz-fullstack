import React, { useRef } from "react";
import { Link } from "react-router-dom";

import "../styles/Main.css";

export default function Main() {
  const inputRef = useRef(null);

  return (
    <div className="container">
      <h1 className="title text-light">Quiz app</h1>

      <ol>
        <li>There are 10 questions</li>
        <li>10 points rewarded for each correct answer</li>
        <li>Each q has 3 options</li>
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
        <Link className="btn" to={"quiz"}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
}
