import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom } from "./Components/store/atoms/count";
import { numberAtom } from "./Components/store/atoms/number";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}
function Count({}) {
  console.log("re-rendered ");
  return (
    <div>
      <CountRenderer />
      <Button />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      {count}
      <EvenCountRenderer />
    </div>
  );
}
function EvenCountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count % 2 == 0 ? "it is even" : null}</div>;
}
function Button() {
  const setCount = useSetRecoilState(countAtom);

  console.log("buttons re-renders ");
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment{" "}
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}
export default App;
