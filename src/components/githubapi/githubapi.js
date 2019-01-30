import React from 'react';
import {githubData} from '../../utlis/data_githubapi';
import Landing from '../landing/landing';

export default class Githubapi extends React.Component {
    state = {
        userData: null,
    }

    componentDidMount() {
        const username = input;
        githubData(username).then(data => this.setState({userData: data}));
      }

    
    render() {
        if(!this.state.userData){
            return <h3>Please wait :)</h3>
        }
        const { input } = this.state.userData;
        return (
            <div>
                {/* <h1>{name}</h1> */}
                {/* <h1>{input}</h1> */}
            </div>
        );
    }
}

