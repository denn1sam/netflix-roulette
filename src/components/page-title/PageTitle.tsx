import "./page-title.css";
import { useState } from "react";
import { AddEditMovieDialog } from "../add-edit-movie-dialog/AddEditMovieDialog";
import { Logo } from "../logo/Logo";
import { PageTitleProps } from "./page-title-props.interface";

export function PageTitle({
  isDetailsView = false,
  onBackToSearch,
}: PageTitleProps) {
  const [isAddMovieOpen, setIsAddMovieOpen] = useState(false);

  function handleToggleAddMovieDialog(isOpen: boolean) {
    setIsAddMovieOpen(isOpen);
  }

  function handleBackToSearchStep() {
    if (onBackToSearch) {
      onBackToSearch();
    }
  }

  return (
    <div className="page-title">
      <Logo />

      {isDetailsView ? (
        <button
          className="transparent-button"
          onClick={() => handleBackToSearchStep()}
        >
          {"<"} Go back to Search
        </button>
      ) : (
        <button
          className="transparent-button"
          onClick={() => handleToggleAddMovieDialog(true)}
        >
          + Add Movie
        </button>
      )}

      <AddEditMovieDialog
        isOpen={isAddMovieOpen}
        onClose={() => handleToggleAddMovieDialog(false)}
      />
    </div>
  );
}
