import { Router } from "./Router/Router"
import GlobalState from "./contexts/Global/GlobalState"
function App() {
  return (
    <div>
      <GlobalState>
      <Router/>
      </GlobalState>
    </div>
  );
}

export default App;
