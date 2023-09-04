import "./functional-block.css";

export function FunctionalSection({ children, className }) {
  return (
    <section className={`functional-section ${className}`}>{children}</section>
  );
}
