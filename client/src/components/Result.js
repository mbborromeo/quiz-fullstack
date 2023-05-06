import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ResultTable from "./ResultTable";
import "../styles/Result.css";
import { useDispatch, useSelector } from "react-redux";
import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";
import {
  attempts_Number,
  earnPoints_Number,
  flagResult,
} from "../helper/helper";
import { usePublishResult } from "../hooks/setResult";

export default function Result() {
  const dispatch = useDispatch();
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);

  const totalPoints = queue.length * 10;
  const attempts = attempts_Number(result);
  const earnPoints = earnPoints_Number(result, answers, 10);
  const flag = flagResult(totalPoints, earnPoints);

  // store user result on database */
  usePublishResult({
    result,
    username: userId,
    attempts,
    points: earnPoints,
    achieved: flag ? "Pass" : "Fail",
  });

  const onRestart = () => {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  };

  return (
    <div className="container">
      <h1 className="title text-light">Result</h1>

      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">{userId || ""}</span>
        </div>

        <div className="flex">
          <span>Attempted Questions</span>
          <span className="bold">{attempts || 0}</span>
        </div>
        <div className="flex">
          <span>Out of</span>
          <span className="bold">{queue.length || 0}</span>
        </div>
        <div className="flex">
          <span>Total Earned Points</span>
          <span className="bold">{earnPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Maximum Points</span>
          <span className="bold">{totalPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Quiz Results</span>
          <span className="bold" style={{ color: `${flag ? "green" : "red"}` }}>
            {flag ? "Pass" : "Fail"}{" "}
            {earnPoints && totalPoints
              ? `${(earnPoints / totalPoints) * 100}%`
              : "0"}
          </span>
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
