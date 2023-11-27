import "./App.css";
import "./style/Countdown.css";
import Countdown from "./components/Countdown";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Countdown date="2020-11-28T00:00:00" />
      </div>
    </div>
  );
}

export default App;
