import { ReactElement } from "react";
import "./functional-block.css";
import { FunctionalSectionModel } from "./functional-section.model";

export function FunctionalSection({
  children,
  className,
}: FunctionalSectionModel): ReactElement {
  return (
    <section className={`functional-section ${className}`}>{children}</section>
  );
}
