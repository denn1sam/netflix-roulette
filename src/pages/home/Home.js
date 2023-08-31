import "./home.css";
import { SearchMovieSection } from "../../components/search-movie-section/Search-Movie-Section";

export function Home() {
  return (
    <section className="home-page with-fluid-height">
      <SearchMovieSection />
    </section>
  );
}
