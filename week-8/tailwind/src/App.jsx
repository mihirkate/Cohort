import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RevenueCard from "./Components/RevenueCard";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="grid grid-cols-4">
      <RevenueCard
        title={"Amount Pending"}
        amount={"92,000.00"}
        orderCount={13}
      />
    </div>
  );
}

export default App;
