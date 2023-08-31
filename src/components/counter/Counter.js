import "./counter.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
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
  );
}

export default class CounterLegacy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialValue || 0,
    };
  }

  incrementValue = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrementValue = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    const { count } = this.state;

    const header = React.createElement(
      "h2",
      { onClick: this.incrementValue },
      "Counter Legacy (using class)"
    );

    const incrementButton = React.createElement(
      "button",
      { onClick: this.incrementValue },
      "+1"
    );

    const decrementButton = React.createElement(
      "button",
      { onClick: this.decrementValue },
      "-1"
    );

    return React.createElement(
      "div",
      null,
      header,
      React.createElement("p", null, `Count: ${count}`),
      incrementButton,
      decrementButton
    );
  }
}

// uncomment to test first task
// const element = React.createElement(CounterLegacy, { initialValue: 0 });
// ReactDOM.render(element, document.getElementById("counter-legacy"));
