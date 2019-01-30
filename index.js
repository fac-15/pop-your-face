import React from "react";
import { render } from "react-dom";

const App = () => 
    <div>
    <h1>pop your face!</h1>
    <input type='text' value='Type your '></input>
    </div>

render(<App />, document.getElementById("root"));
