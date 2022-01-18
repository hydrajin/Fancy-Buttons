import React, { useState } from 'react';
// 1. Create a loop that will store as many <span> I like this text<span> elements thate are necessary
// 2. Place the array in the JSX to show those span elements inside the button

function TextRepeaterButton(props) {
  const [repetitions, setRepetitions] = useState();
  const textArray = [];
  for(let i = 0; i < repetitions; i++) {
    textArray.push(<span key={i}> I like this text</span>)
  }
  return(
    <button className="TextRepeaterButton">
      {textArray}
    </button>
  );
}

export default TextRepeaterButton;