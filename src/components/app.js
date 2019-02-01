import React from "react";
import Landing from "./landing/landing";
import { UserImage } from "./githubapi/githubapi";
import { githubData } from "../utlis/data_githubapi";
import Counter from "./counter/counter";
import "./landing/landing.css";

export default class App extends React.Component {
  state = {
    userData: "",
    clicked: false,
    images: Array.from({ length: 30 }),
    imagesClicked: []
  };

  handleClick = id => {
    this.setState({
      clicked: true,
      imagesClicked: this.state.imagesClicked.concat(id)
    });
  };

  handleUser = value => {
    githubData(value).then(data => this.setState({ userData: data }));
  };

  render() {
    return (
      <div>
        <Landing handleUser={this.handleUser} />
        {!this.state.userData ? (
          <h3 class="loading">
            💥How to play?💥
            <p>
              Pop your face by clicking
              <br />
              to get rid of Reactress(stress)!
              <br />
              Type your github ID
              <br />
              Get rid of all your face in 30s!
              <br />
              Enjoy now :)
              <br />
            </p>
          </h3>
        ) : (
          this.state.images.map((image, id) => (
            <UserImage
              key={id}
              id={id}
              userData={this.state.userData}
              onClick={() => this.handleClick(id)}
              className={this.state.imagesClicked.includes(id) ? "clicked" : id}
            />
          ))
        )}
        <Counter />
      </div>
    );
  }
}
