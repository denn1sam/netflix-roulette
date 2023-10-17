import "./App.css";
import { HomePage } from "./pages/home/HomePage";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <HomePage />
      </AppContextProvider>
    </div>
  );
}

export default App;
