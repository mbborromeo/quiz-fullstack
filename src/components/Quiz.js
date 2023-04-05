import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";

/* redux store import */
import { useSelector, useDispatch } from "react-redux";

export default function Quiz() {
  const [check, setChecked] = useState(undefined);
  const state = useSelector((state) => state);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("state", state);
  });

  const onPrev = () => {
    console.log("on previous");
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
  };

  const onNext = () => {
    console.log("on next");
    // update the trace question value */
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());
      dispatch(PushAnswer(check));
    }
  };

  const onChecked = (check) => {
    console.log("check", check);
    setChecked(check);
  };

  return (
    <div className="container">
      <h1 className="title text-light">Quiz component</h1>

      {/* display questions */}
      <Questions onChecked={onChecked} />

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
