import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
    
    </>
  )
}

export default App
