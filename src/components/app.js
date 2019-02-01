import React from "react";
import Landing from "./landing/landing";
import { UserImage } from "./githubapi/githubapi";
import { githubData } from "../utlis/data_githubapi";
// import Obstacle from './obstacle';

export default class App extends React.Component {
  state = {
    userData: "",
    clicked: false,
    images: Array.from({length:30}),
    imagesClicked: []
  };

  handleClick = (id) => {
    this.setState({ clicked: true, imagesClicked: this.state.imagesClicked.concat(id) });
  };

  handleUser = value => {
    githubData(value).then(data => this.setState({ userData: data }));
  };

  render() {
    // let imageClassName = [''];
    // let clickedClassName = 'clicked';
    // console.log(this.state)
    return (
 
      <div>
        <Landing handleUser={this.handleUser} />
        {this.state.images.map((image, id) => (
          <UserImage
          key={id}
          id={id}
          userData={this.state.userData}
          onClick={() => this.handleClick(id)}
          className={this.state.imagesClicked.includes(id)?'clicked':id}
          />))}
      </div>
    );
  }
}
