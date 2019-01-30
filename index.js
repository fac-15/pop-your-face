import React from "react";
import { render } from "react-dom";

const App = () => (
  <div>
    <h1>Pop your face!</h1>
    <input type="text" value="Type your Github ID here!" />
    <button>Submit</button>
  </div>
);

render(<App />, document.getElementById("root"));
