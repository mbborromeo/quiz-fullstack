import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import data from "../database/data.js";

/* custom hook */
import { useFetchQuestion } from "../hooks/FetchQuestion.js";
import { updateResult } from "../hooks/setResult.js";
// import { updateResultAction } from "../redux/result_reducer.js";

const Questions = ({ onChecked }) => {
  const [checked, setChecked] = useState(undefined);
  // const state = useSelector((state) => state);
  // console.log("state", state);
  const { trace } = useSelector((state) => state.questions);
  const { result } = useSelector((state) => state.result);

  const [{ isLoading, apiData, serverError }] = useFetchQuestion();
  // const question = data[0];
  useSelector((state) => console.log(state));

  const question = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("isLoading", isLoading);
    // console.log("apiData", apiData);
    // console.log("serverError", serverError);
    console.log({ trace, checked });
    dispatch(updateResult({ trace, checked }));
  }, [trace, checked, dispatch]);

  const onSelect = (i) => {
    onChecked(i);
    setChecked(i);
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
              onChange={() => onSelect(i)}
            />
            <label htmlFor={`q${i}-option`} className="text-primary">
              {q}
            </label>
            <div
              className={`check${result[trace] === i ? " checked" : ""}`}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
