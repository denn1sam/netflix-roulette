import "./card.css";

export function Card({ children, title }) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>

      <div>{children}</div>
    </div>
  );
}
