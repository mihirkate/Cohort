import React, { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      });
    }, 1000);
  }, []);
  return (
    <div>
      {todos.map(({ title, description }) => (
        <Todo key={todos.id} title={title} description={description} />
      ))}
    </div>
  );
}
function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}
export default App;
