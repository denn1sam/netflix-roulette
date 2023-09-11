import "./counter.css";
import { useState } from "react";

export function Counter({ initialCount = 0 }: { initialCount?: number }) {
  const [count, setCount] = useState(initialCount);

  function increment(): void {
    setCount((currentCount) => currentCount + 1);
  }

  function decrement(): void {
    setCount((currentCount) => currentCount - 1);
  }

  return (
    <div className="card">
      <h2 className="card-title">Counter</h2>
      <div className="counter">
        <p className="counter-count" data-testid="count">
          Count: {count}
        </p>

        <div className="counter-actions">
          <button
            className="counter-increase counter-button"
            onClick={increment}
            data-testid="increment"
          >
            +1
          </button>
          <button
            className="counter-decrease counter-button"
            onClick={decrement}
            data-testid="decrement"
          >
            -1
          </button>
        </div>
      </div>
    </div>
  );
}
