import React from 'react';
import Landing from './landing/landing'
import {UserImage} from './githubapi/githubapi';
import { githubData } from '../utlis/data_githubapi';
import Counter from './counter/Counter';
// import Obstacle from './obstacle';

export default class App extends React.Component {
    state = {
        userData: ''
    }

    handleUser = (value) => {
        githubData(value).then(data => this.setState({userData: data}));
    }

    render() {
        return(
            <div>
                <Counter />
                <Landing handleUser={this.handleUser}/>
                <UserImage userData={this.state.userData}/>
                {/* <Obstacle /> */}
            </div>
        );
    }
}
