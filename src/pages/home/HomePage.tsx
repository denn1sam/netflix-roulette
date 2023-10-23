import "./home-page.css";
import { MoviesList } from "../../components/movies-list/MoviesList";
import { HomeTopSection } from "./components/home-top-section/HomeTopSection";
import { PageFooter } from "../../components/page-footer/PageFooter";
import { Outlet } from "react-router-dom";

export function HomePage() {
  return (
    <section className="home-page with-fluid-height">
      <div className="home-page-top-section">
        <HomeTopSection>
          <Outlet />
        </HomeTopSection>
      </div>
      <MoviesList />
      <PageFooter />
    </section>
  );
}
