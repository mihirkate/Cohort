import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ backgroundColor: "red" }}>HIii Mihir here </div>
        <div style={{ backgroundColor: "blue" }}>HIii Mihir here </div>
        <div style={{ backgroundColor: "yellow" }}>HIii Mihir here </div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>

      <div className="grid grid-cols-4">
        <div style={{ backgroundColor: "red" }}>HIii Mihir here </div>
        <div style={{ backgroundColor: "blue" }}>HIii Mihir here </div>
        <div style={{ backgroundColor: "yellow" }}>HIii Kate here </div>
      </div>
    </>
  );
}

export default App;
