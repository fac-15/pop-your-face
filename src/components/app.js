import React from 'react';
import Githubapi from './components/githubapi';
import Obstacle from './components/obstacle';

export default class App extends from React.Component {
    render() {
        return (
            <div>
                <Githubapi />
                <Obstacle />
            </div>
        );
    }
}