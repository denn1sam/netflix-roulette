import "./App.css";
import { Home } from "./pages/home/Home";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Home />
      </AppContextProvider>
    </div>
  );
}

export default App;
