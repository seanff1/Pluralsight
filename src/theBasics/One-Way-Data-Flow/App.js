import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function Button(props) {
  // const clickHandler = () => setCounter(counter + 1);
  return <button onClick={props.incrementCounter}>+1</button>;
}

function Display(props) {
  return <div>{props.theCounter}</div>;
}

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  return (
    <div>
      <Button incrementCounter={incrementCounter} />
      <Display theCounter={counter} />
    </div>
  );
}

export { Button, Display, App };
