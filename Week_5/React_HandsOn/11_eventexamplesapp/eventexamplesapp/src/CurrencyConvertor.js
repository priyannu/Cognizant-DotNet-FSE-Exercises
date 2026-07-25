import React, { Component } from "react";
class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "",
      currency: "", 
    };
  }

  handleAmountChange = (event) => {
    this.setState({
      amount: event.target.value,
    });
  };

  handleCurrencyChange = (event) => {
    this.setState({
      currency: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const amount = Number(this.state.amount);

    if (!amount) {
      alert("Please enter a valid amount");
      return;
    }

    const euroValue = amount / 90;

    alert(
      `Converting to Euro. The amount is ${euroValue.toFixed(2)}`
    );
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "green" }}>Currency Convertor!!!</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            Amount:
            <input
              type="number"
              value={this.state.amount}
              onChange={this.handleAmountChange}
            />
          </label>

          <br />

          <label>
            Currency:
            <input
              type="text"
              value={this.state.currency}
              onChange={this.handleCurrencyChange}
            />
          </label>

          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;