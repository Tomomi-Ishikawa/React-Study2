import "./styles.css";
import { useState } from "react";

export default function App() {
  console.log("App");
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p> {count}</p>
      <button onClick={countUp}>カウントアップ</button>
    </div>
  );
}
