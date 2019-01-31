import React from 'react';
import {githubData} from '../../utlis/data_githubapi';
import Landing from '../landing/landing';
import './counter.css';

export default class Counter extends React.Component {

      constructor(props) {
        super(props);
        this.state = {
          count: 5 //start count 120
        };
        this.timerTick = this.timerTick.bind(this);
        console.log("Constructor!");
      }
      timerTick() {
        this.setState((prevState) => {
          return {
            count: prevState.count - 1
          };
        });
      }
      componentDidMount() {
        this.timer = setInterval(this.timerTick, 1000);
        console.log("Component has mounted!");
      }
      componentDidUpdate(prevProps, prevState) {
          console.log("THIS.TIMER: ",this.timer);
        console.log("Component updated from: " + prevState.count);
        if (this.state.count == 0) {
            clearInterval(this.timer);
        }
      }

      componentWillUnmount() {
        console.log("Component is about to be unmounted!");
        clearInterval(this.timer);
      }
      render() {
        console.log("SimpleCounter render call!");

        return (

           <h6> {this.state.count == 0 ?  "Game Over!" : this.state.count} </h6>
        );
      }
}
