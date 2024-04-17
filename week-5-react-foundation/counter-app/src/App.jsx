

function App() {
let state={
  count:0,

}
function myfunction(){
  alert("Hi there ")
  state.count+=1;
  console.log(state.count);
}
  return (
   <>
  <button onClick={myfunction}> counter {state.count}</button>
   </>
  )
}

export default App
