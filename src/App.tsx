import { useState } from "react";
import "./App.css";
import { Dialog } from "./components/dialog/Dialog";
import { Home } from "./pages/home/Home";

function App() {
  const [isAddMovieOpen, setIsAddMovieOpen] = useState(false);

  function handleToggleAddMovieDialog(isOpen: boolean) {
    setIsAddMovieOpen(isOpen);
  }

  return (
    <div className="App">
      <Home />
      <div onClick={() => handleToggleAddMovieDialog(true)}>open</div>
      <Dialog
        title="dialog"
        isOpen={isAddMovieOpen}
        onClose={() => handleToggleAddMovieDialog(false)}
      >
        <div>hello</div>
      </Dialog>
    </div>
  );
}

export default App;
