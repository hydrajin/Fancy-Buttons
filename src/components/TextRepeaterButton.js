import React, { useState } from 'react';

function TextRepeaterButton(props) {
  const [repitions, setRepitions] = useState();
  return(
    <button className="TextRepeaterButton">
      <span>I like this text</span>
    </button>
  );
}

export default TextRepeaterButton;