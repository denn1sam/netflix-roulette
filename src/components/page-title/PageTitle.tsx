import "./page-title.css";
import { useState } from "react";
import { AddEditMovieDialog } from "../add-edit-movie-dialog/AddEditMovieDialog";
import { Logo } from "../logo/Logo";

export function PageTitle() {
  const [isAddMovieOpen, setIsAddMovieOpen] = useState(false);

  function handleToggleAddMovieDialog(isOpen: boolean) {
    setIsAddMovieOpen(isOpen);
  }

  return (
    <div className="page-title">
      <Logo />

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
