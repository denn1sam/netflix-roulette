import "./page-title.css";
import { useState } from "react";
import { AddEditMovieDialog } from "../add-edit-movie-dialog/AddEditMovieDialog";

export function PageTitle() {
  const [isAddMovieOpen, setIsAddMovieOpen] = useState(false);

  function handleToggleAddMovieDialog(isOpen: boolean) {
    setIsAddMovieOpen(isOpen);
  }

  return (
    <div className="page-title">
      <div className="page-title-logo">
        <span className="bold">netflix</span>
        <span>roulette</span>
      </div>

      <button
        className="transparent-button"
        onClick={() => handleToggleAddMovieDialog(true)}
      >
        + Add Movie
      </button>

      <AddEditMovieDialog
        isOpen={isAddMovieOpen}
        onClose={() => handleToggleAddMovieDialog(false)}
      />
    </div>
  );
}
