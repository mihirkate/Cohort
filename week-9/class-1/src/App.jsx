import { useEffect, useState } from "react";
import axios from "axios";

function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, 1000);
  }, []);
  return { todos, loading };
}
function App() {
  const { todos, loading } = useTodos();
  return (
    <>{loading ? "loading..." : todos.map((todo) => <Track todo={todo} />)}</>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default App;
