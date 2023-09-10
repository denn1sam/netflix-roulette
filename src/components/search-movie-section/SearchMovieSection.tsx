import "./search-movie-section.css";
import { FunctionalSection } from "../functional-section/FunctionalSection";
import { SearchField } from "../search-field/SearchField";

export function SearchMovieSection() {
  function handleSearch(searchValue: string) {
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