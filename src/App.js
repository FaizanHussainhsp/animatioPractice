import logo from "./logo.svg";
import "./App.css";
import {
  TransitionGroup,
  CSSTransition,
  Transition,
} from "react-transition-group";
import { useState } from "react";
import Card from "./component/card";

// const cssTranscitionTime = {
//   enter: 600,
//   exit: 1000,
// };

function App() {
  const [display, setDisplay] = useState(false);

  const clickHandler = () => {
    setDisplay(!display);
  };

  return (
    <div className="App">
      <button onClick={clickHandler}>Toggle</button>

      <Transition mountOnEnter unmountOnExit in={display} timeout={1000}>
        {(state) => {
          return (
            <Card
              state={state}
              path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2Q1CYPGgKzJxM2vbds47uffnrIjLDSkkCg&usqp=CAU"
              heading="testing01"
              detail="innocent boy with innocent face"
            />
          );
        }}
      </Transition>
    </div>
  );
}

export default App;
