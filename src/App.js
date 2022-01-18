import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import AngryButton from "./components/AngryButton";
import CounterButton from "./components/CounterButton";
import LightSwitchButton from "./components/LightSwitchButton";
import TextRepeaterButton from "./components/TextRepeaterButton";

/* After some refactoring, the state of light is moved to the App component. 
It now knows the state of light (and so things in App can now be easily affected by 
the current value of light). Also, since App is calling the LightSwitchButton component, 
it can give the state of light as a prop.
The state of light is now available in two different components! */

function App() {
  // const [light, setLight] = useState('off');
  return (
    <div className={"App dark"}>
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton />
        {/* <LightSwitchButton light={light} setLight={setLight}/> */}
        <TextRepeaterButton />
      </section>
    </div>
  );

  // function LightSwitchButton(props) {
  //   const {light, setLight} = props;
  // }
}

/* From the React docs: In React, sharing state is accomplished by moving it up to the 
closest common ancestor of the components that need it. 
This is called *“lifting state up”*. */

export default App;
