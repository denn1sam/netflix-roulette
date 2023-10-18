import "./search-movie-section.css";
import { FunctionalSection } from "../functional-section/FunctionalSection";
import { SearchField } from "../search-field/SearchField";
import { PageTitle } from "../page-title/PageTitle";
import { useAppContext } from "../../context/AppContext";
import { Outlet } from "react-router-dom";

export function SearchMovieSection() {
  const { search, handleSearchChange } = useAppContext();

  function handleSearch(searchValue: string) {
    handleSearchChange(searchValue);
  }

  return (
    <FunctionalSection className="search-movie-section">
      <div className="search-movie-block">
        <PageTitle isDetailsView={false} />
        <h2 className="title">Find your movie</h2>

        <SearchField onSearch={handleSearch} initialSearch={search} />
      </div>

      <Outlet />
    </FunctionalSection>
  );
}
