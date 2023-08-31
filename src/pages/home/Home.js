import "./home.css";
import { SearchMovieSection } from "../../components/search-movie-section/Search-Movie-Section";
import { MoviesList } from "../../components/movies-list/Movies-List";

export function Home() {
  return (
    <section className="home-page with-fluid-height">
      <SearchMovieSection />
      <MoviesList />
    </section>
  );
}
