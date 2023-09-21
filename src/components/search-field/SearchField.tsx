import "./search-field.css";
import { useState } from "react";

export function SearchField({
  onSearch,
  initialSearch = "",
}: {
  onSearch: (search: string) => void;
  initialSearch?: string;
}) {
  const [searchValue, setSearchValue] = useState(initialSearch);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  function handleKeyUpPress(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      onSearch(searchValue);
    }
  }

  function handleSearchClick() {
    onSearch(searchValue);
  }

  return (
    <div className="search-field">
      <input
        type="text"
        name="search-movie"
        placeholder="What do you want to watch?"
        className="search-input"
        value={searchValue}
        onChange={handleInputChange}
        onKeyUp={handleKeyUpPress}
        data-testid="search-input"
      />
      <button
        className="search-button flat-button"
        type="submit"
        data-testid="submit"
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
}
