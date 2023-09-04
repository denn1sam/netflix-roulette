import "./search-field.css";
import { useState } from "react";

export function SearchField({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  function handleInputChange(event) {
    setSearchValue(event.target.value);
  }

  function handleKeyUpPress(event) {
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
