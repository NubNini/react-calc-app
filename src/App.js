import React, { Component } from "react";
// import { Grid, Row, Col } from "react-flexbox-grid";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { num: "" };
  }

  setVal = value => {
    this.setState({ num: `${this.state.num}${value}` });
  };

  calculate = () => {
    var currentNum = this.state.num;
    var split = currentNum.split("+", currentNum.length);
    var Result = 0;
    console.log("calc function running");
    for (var i = 0; i < split.length; i++) {
      Result += parseInt(split[i], 10);
    }
    console.log(Result);
    this.setState({ num: `${currentNum}${"=" + Result}` });
  };

  setClear = () => {
    this.setState({ num: "" });
    // console.log(this.state.num);
  };
  render() {
    return (
      <div className="AppCenter">
        <h1 className="App-title">Jens calculator</h1>

        {this.state.num}
        <br />
        <button onClick={() => this.setVal(1)}>1</button>
        <button onClick={() => this.setVal(2)}>2</button>
        <button onClick={() => this.setVal(3)}>3</button>
        <br />
        <button onClick={() => this.setVal(4)}>4</button>
        <button onClick={() => this.setVal(5)}>5</button>
        <button onClick={() => this.setVal(6)}>6</button>
        <br />
        <button onClick={() => this.setVal(7)}>7</button>
        <button onClick={() => this.setVal(8)}>8</button>
        <button onClick={() => this.setVal(9)}>9</button>
        <br />
        <button onClick={() => this.setVal("+")}>+</button>
        <button onClick={() => this.calculate()}>=</button>
        <button onClick={() => this.setClear()}>c</button>
      </div>
    );
  }
}

export default App;
