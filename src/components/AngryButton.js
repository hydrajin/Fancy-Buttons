import React, { useState } from 'react';
// Since we don't HAVE to import React explicitly, we can also just type this:
//import { useState } from "react";

function AngryButton() {
  return (
    <button className="AngryButton">
      {/* When the threshold is not reached */}<span>Don't click me too much! </span>
      {/* When the threshold is not reached */}<span>Rawr!</span>
    </button>
  );
}

export default AngryButton;