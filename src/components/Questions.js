import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import data from "../database/data.js";

/* custom hook */
import { useFetchQuestion } from "../hooks/FetchQuestion.js";

const Questions = () => {
  const [checked, setChecked] = useState(undefined);
  const [{ isLoading, apiData, serverError }, setGetData] = useFetchQuestion();
  // const question = data[0];
  const question = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );

  useEffect(() => {
    console.log("question", question);
  });

  useEffect(() => {
    console.log("isLoading", isLoading);
    console.log("apiData", apiData);
    console.log("serverError", serverError);
  });

  const onSelect = () => {
    // setChecked(true);
    console.log("radio btn change");
  };

  if (isLoading) {
    return <h3 className="text-light">is loading</h3>;
  }

  if (serverError) {
    return <h3 className="text-light">{serverError || "unknown error"}</h3>;
  }

  return (
    <div className="questions">
      <h2 className="text-light">{question?.question}</h2>

      <ul key={question?.id}>
        {question?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={onSelect}
            />
            <label htmlFor={`q${i}-option`} className="text-primary">
              {q}
            </label>
            <div className="check"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
