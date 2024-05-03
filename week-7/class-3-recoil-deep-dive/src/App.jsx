import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { notifications, totalNotificationSelector } from "./atoms";
import { useEffect } from "react";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    // fetch
    fetch("https://sum-server.100xdevs.com/notifications").then((res) => {
      setNetworkCount(res.data);
    });
  }, []);

  return (
    <>
      <button>Home</button>

      <button>
        My network (
        {notifications.networks >= 100 ? "99+" : notifications.networks})
      </button>
      <button>Jobs {notifications.jobs}</button>
      <button>Messaging ({notifications.messaging})</button>
      <button>Notifications ({notifications.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;
