import "./counter.css";
import { useState } from "react";

export function Counter({ title }: { title: string }) {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div className="counter">
        <p className="counter-count">Count: {count}</p>

        <div className="counter-actions">
          <button
            className="counter-increase counter-button"
            onClick={() => setCount((count) => count + 1)}
          >
            +1
          </button>
          <button
            className="counter-decrease counter-button"
            onClick={() => setCount((count) => count - 1)}
          >
            -1
          </button>
        </div>
      </div>
    </div>
  );
}
