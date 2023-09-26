import "./movies-filtering-section.css";
import { GenresTabs } from "../genres-tabs/GenresTabs";
import { SelectField } from "../select-field/SelectField";
import { SORT_OPTIONS, useAppContext } from "../../context/AppContext";


export function MoviesFilteringSection() {
  const { selectedSorting, handleSortChange } = useAppContext();

  return (
    <div className="movies-filtering-section">
      <GenresTabs></GenresTabs>
      <SelectField
        label="Sort By"
        selectOptions={SORT_OPTIONS}
        selectedValue={selectedSorting}
        onSelectedValueChanges={handleSortChange}
      ></SelectField>
    </div>
  );
}
