import React, { useEffect } from "react";
import Questions from "./Questions";

/* redux store import */
import { useSelector } from "react-redux";

export default function Quiz() {
  // const { questions } = useSelector((state) => state);
  const state = useSelector((state) => state);

  useEffect(() => {
    // console.log("questions queue", questions.queue);
    console.log("state", state);
  });

  const onPrev = () => {
    console.log("on previous");
  };

  const onNext = () => {
    console.log("on next");
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
