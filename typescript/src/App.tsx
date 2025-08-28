import { useState, type JSX } from "react";

import "./App.css";
import User from "./componets/user";

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <User name="Muhammad" age={20} />
      <User name="Lulik" age={10} />
      <h1>TypeScript</h1>
    </>
  );
}

export default App;
