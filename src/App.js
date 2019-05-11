import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  render() {
    return (
      <div>
        <div data-test="yo">The count is {this.state.counter}</div>

        <div>
          <button data-test="btn" onClick={() => this.setState(prev => ({ counter: prev.counter + 1 }))}>
            Increment Counter
          </button>
        </div>
      </div>
    );
  }
}

export default App;
