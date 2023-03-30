import React, { useState } from "react";
import data from "../database/data.js";

const Questions = () => {
  const [checked, setChecked] = useState(undefined);

  // useEffect
  console.log("data", data);

  const question = data[0];

  const onSelect = () => {
    // setChecked(true);
    console.log("radio btn change");
  };

  return (
    <div className="questions">
      <h2 className="text-light">{question.question}</h2>

      <ul key={question.id}>
        {question.options.map((q, i) => (
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
