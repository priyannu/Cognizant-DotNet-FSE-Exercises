import React, { Component } from "react";
import "./App.css";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState((previousState) => ({
      counter: previousState.counter + 1,
    }));
  };

  decrement = () => {
    this.setState((previousState) => ({
      counter: previousState.counter - 1,
    }));
  };

  sayHello = () => {
    alert("Hello! Member");
  };

  handleIncrement = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (message) => {
    alert(message);
  };

  handleSyntheticEvent = (event) => {
    alert("I was clicked");
    console.log(event);
  };

  render() {
    return (
      <div className="App">
        <h2>{this.state.counter}</h2>

        <button onClick={this.handleIncrement}>Increment</button>
        <br />

        <button onClick={this.decrement}>Decrement</button>
        <br />

        <button onClick={() => this.sayWelcome("Welcome")}>
          Say Welcome
        </button>
        <br />

        <button onClick={this.handleSyntheticEvent}>Click on me</button>

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;