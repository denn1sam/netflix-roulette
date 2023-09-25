import "./movies-filtering-section.css";
import { GenresTabs } from "../genres-tabs/GenresTabs";
import { useState } from "react";
import { SelectedValue } from "../select-field/select-field.model";
import { SelectField } from "../select-field/SelectField";

const SELECTED_OPTIONS: SelectedValue[] = [
  { label: "Release Date", value: "releaseDate" },
  { label: "Title", value: "title" },
];

export function MoviesFilteringSection() {
  const [selectedSorting, setSelectedSorting] = useState(SELECTED_OPTIONS[0]);

  function handleOnSelect(genre: string) {
    console.log("selected genre:", genre);
  }

  function handleOnSelectedValueChanges(selectedSorting: SelectedValue) {
    setSelectedSorting(selectedSorting);
  }

  return (
    <div className="movies-filtering-section">
      <GenresTabs onSelect={handleOnSelect}></GenresTabs>
      <SelectField
        label="Sort By"
        selectOptions={SELECTED_OPTIONS}
        selectedValue={selectedSorting}
        onSelectedValueChanges={handleOnSelectedValueChanges}
      ></SelectField>
    </div>
  );
}
