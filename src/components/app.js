import React from 'react';
import Landing from './landing/landing'
import Githubapi from './githubapi/githubapi';
// import Obstacle from './obstacle';

export default class App extends React.Component {     
    render() {
        return(
            <div>
                <Landing />
                <Githubapi />
                {/* <Obstacle /> */}
            </div>
        );
    }
}

