import "./search-field.css";
import { useState } from "react";

export function SearchField({
  onSearch,
}: {
  onSearch: (search: string) => void;
}) {
  const [searchValue, setSearchValue] = useState("");

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
      />
      <button
        className="search-button"
        type="submit"
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
}
