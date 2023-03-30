import React from "react";
import { Link } from "react-router-dom";
import ResultTable from "./ResultTable";
import "../styles/Result.css";

export default function Result() {
  const onRestart = () => {
    console.log("on restart");
  };

  return (
    <div className="container">
      <h1 className="title text-light">Result</h1>

      <div className="result flex-center">
        <div className="flex">
          <span>Total Quiz Points</span>
          <span className="bold">50</span>
        </div>
        <div className="flex">
          <span>Total Questions</span>
          <span className="bold">50</span>
        </div>
        <div className="flex">
          <span>Total Attempts</span>
          <span className="bold">50</span>
        </div>
        <div className="flex">
          <span>Total Earned Points</span>
          <span className="bold">50</span>
        </div>
        <div className="flex">
          <span>Quiz Results</span>
          <span className="bold">Passed</span>
        </div>
      </div>

      <div className="start">
        <Link className="btn" to={"/"} onClick={onRestart}>
          Restart
        </Link>
      </div>

      <div className="container">
        <ResultTable />
      </div>
    </div>
  );
}
