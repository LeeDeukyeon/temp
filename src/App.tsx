import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const 리턴값 = useState(0);
  const count = 리턴값[0];
  const setCount = 리턴값[1];
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((현재count) => 현재count + 1)}>
        증가
      </button>
      <button onClick={() => setCount((현재count) => 현재count - 1)}>
        감소
      </button>
      <button onClick={() => setCount(0)}>초기화</button>
    </div>
  );
}
export default App;
