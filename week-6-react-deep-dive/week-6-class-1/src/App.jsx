import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function App() {
  const [title, setTitle] = useState(" Mihir");
  function change() {
    setTitle(`my name is ${Math.random()}`);
  }
  return (
    <>
      <button onClick={change}>Change</button>
      <Header title={title}></Header>
      <Header title={title}></Header>
    </>
  );
}

function Header({ title }) {
  return <div>{title} </div>;
}

export default App;
