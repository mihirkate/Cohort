
import './App.css'

function App() {
  interface Todo{
    title:String,
    desc:String,
  }
function todo(todo:Todo){
  return <div>
    {todo.title} 
  </div>
}
  return (
    <>
    {todo}
    </>
  )
}

export default App
