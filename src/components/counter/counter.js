import React from "react";
import { githubData } from "../../utlis/data_githubapi";
import Landing from "../landing/landing";
import "./counter.css";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 30 //start count 120
    };
  }

  timerTick = () => {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  startClick = () => {
    this.timer = setInterval(this.timerTick, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count == 0) {
      clearInterval(this.timer);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <button onClick={this.startClick} className='start'>Start!</button>
        <h6> {this.state.count == 0 ? "Game Over!" : this.state.count+'s'} </h6>
      </div>
    );
  }
}
