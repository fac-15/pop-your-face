import React from "react";
import "./githubapi.css";

export const UserImage = props => {
  if (!props.userData) {
    return <h3>Please wait :)</h3>;
  }

  // const images = Array.from({ length: 30 });
  // let imageClass = props.className;
  // let clickedClass = props.className.push('clicked');

  return (

    <img
      src={props.userData.avatar_url}
      onClick={props.onClick}
      className={props.className}
    />
  );
};
