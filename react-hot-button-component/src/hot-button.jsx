import React from "react";

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickNumber: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      clickNumber: this.state.clickNumber + 1,
    });
  }

  render() {
    let temperature = this.state.temperature;
    if (this.state.clickNumber < 3) {
      temperature = "cold";
    } else if (this.state.clickNumber < 6) {
      temperature = "cool";
    } else if (this.state.clickNumber < 9) {
      temperature = "tepid";
    } else if (this.state.clickNumber < 12) {
      temperature = "warm";
    } else if (this.state.clickNumber < 15) {
      temperature = "hot";
    } else if (this.state.clickNumber >= 18) {
      temperature = "nuclear";
    }
    return (
      <button
        className={`hot-button ${temperature}`}
        onClick={this.handleClick}
      >
        Hot Button
      </button>
    );
  }
}

export default HotButton;
