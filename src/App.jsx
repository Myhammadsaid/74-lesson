import "./App.css";
import Count from "./components/count/Count";
import Decrement from "./components/decrement/Decrement";
import Increment from "./components/increment/Increment";
import Reset from "./components/reset/Reset";

function App() {
  return (
    <div className="container">
      <h1 className="counter-title">Counter App</h1>
      <div className="count-box">
        <Increment />
        <Count />
        <Decrement />
      </div>

      <Reset />
    </div>
  );
}

export default App;
