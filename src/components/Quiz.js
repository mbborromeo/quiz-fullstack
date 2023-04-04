import React, { useEffect } from "react";
import Questions from "./Questions";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";

/* redux store import */
import { useSelector, useDispatch } from "react-redux";

export default function Quiz() {
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("questions queue", questions.queue);
    console.log("trace", trace);
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
    if (trace < queue.length - 1) {
      dispatch(MoveNextQuestion());
    }
  };

  return (
    <div className="container">
      <h1 className="title text-light">Quiz component</h1>

      {/* display questions */}
      <Questions />

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
