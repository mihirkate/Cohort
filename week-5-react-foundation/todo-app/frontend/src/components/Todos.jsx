export function Todos({ todos }) {
  if (!todos || todos.length === 0) {
    return <div>No todos available</div>;
  }
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {todo.completed == true ? "completed" : "Mark as Completed "}
            </button>
          </div>
        );
      })}
    </div>
  );
}
