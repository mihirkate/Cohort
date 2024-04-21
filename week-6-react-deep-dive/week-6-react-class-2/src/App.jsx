import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div>
      <button onClick={() => setSelectedId(1)}>1</button>
      <button onClick={() => setSelectedId(2)}>2</button>
      <button onClick={() => setSelectedId(3)}>3</button>
      <button onClick={() => setSelectedId(4)}>4</button>
      <Todo id={selectedId} />
    </div>
  );
}
function Todo({ id }) {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + id).then(async (res) => {
      const ans = await res.json();
      setTodo(ans.todo);
    });
  }, [id]);
  return (
    <div>
      Id:{id}
      <h1>{todo.title}</h1>
      <h5>{todo.description}</h5>
    </div>
  );
}
export default App;
