import React from 'react';
import Githubapi from './githubapi/githubapi';
// import Obstacle from './obstacle';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Pop your face!</h1>
                <input type="text" value="Type your Github ID here!" />
                <button>Submit</button>
                <Githubapi />
                {/* <Obstacle /> */}
            </div>
        );
    }
}

