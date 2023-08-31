import "./search-movie-section.css";
import { FunctionalSection } from "../functional-section/Functional-Section";
import { SearchField } from "../search-field/Search-Field";

export function SearchMovieSection() {
  function handleSearch(searchValue) {
    console.log(searchValue);
  }

  return (
    <FunctionalSection className="search-movie-section">
      <div className="search-movie-block">
        <h2 className="title">Find your movie</h2>

        <SearchField onSearch={handleSearch} />
      </div>
    </FunctionalSection>
  );
}
