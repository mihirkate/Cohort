import { BrowseRouter, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import SendMoney from "./Pages/SendMoney";
function App() {
  return (
    <>
      <BrowseRouter>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<SendMoney />} />
      </BrowseRouter>
    </>
  );
}

export default App;
