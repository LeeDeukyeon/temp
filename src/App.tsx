import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function Counter() {
  const 리턴값 = useState(0);
  const count = 리턴값[0];
  const setCount = 리턴값[1];

  let 초기화버튼;
  if (count > 0) {
    초기화버튼 = <button onClick={() => setCount(0)}>초기화</button>;
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      <button onClick={() => setCount((count) => count - 1)}>감소</button>
      {초기화버튼}
    </div>
  );
}

function App() {
  const 학교이름들 = [
    "경기고",
    "성수고",
    "창동고",
    "숭신여고",
    "양명여고",
    "성신고",
  ];
  return (
    <div>
      {학교이름들.map((학교이름) => (
        <div>
          <h1>{학교이름}</h1>
          <Counter />
        </div>
      ))}
    </div>
  );
}

export default App;
