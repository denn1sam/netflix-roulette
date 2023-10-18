import "./page-title.css";
import { Logo } from "../logo/Logo";
import { PageTitleProps } from "./page-title-props.interface";
import { useNavigate } from "react-router-dom";

export function PageTitle({ isDetailsView = false }: PageTitleProps) {
  const navigate = useNavigate();

  return (
    <div className="page-title">
      <Logo />

      {isDetailsView ? (
        <button className="transparent-button" onClick={() => navigate("/")}>
          {"<"} Go back to Search
        </button>
      ) : (
        <button className="transparent-button" onClick={() => navigate("/new")}>
          + Add Movie
        </button>
      )}
    </div>
  );
}
