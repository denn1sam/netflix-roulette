import "./App.css";
// import { Counter } from "./components/counter/Counter";
// import { Card } from "./components/card/Card";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      {/* Uncomment for test the first task */}
      {/* <Card title="Counter functional">
        <Counter />
      </Card> */}

      <Home />
    </div>
  );
}

export default App;
