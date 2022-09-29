import { useEffect, useState } from "react";
import "./App.css";
import { getRoute } from "./Routes/index";
import { publicRoute } from "./Routes/PublicRoute";
import Router from "./Routes/Router";

function App() {
  const [allRoute, setAllRoute] = useState([...publicRoute]);

  useEffect(() => {
    const route = getRoute();
    setAllRoute([...allRoute, route]);
  }, []);

  return (
    <div className="App">
      <Router allRoute={allRoute} />
    </div>
  );
}

export default App;
