import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let count = 0;
  return (
    <div>
      <h1>0</h1>
      <button onClick={() => console.log("클릭됨")}>증가</button>
    </div>
  );
}
export default App;
