import React from 'react';

export default class Landing extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleUser(this.state.value);
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Pop your face!</h1>
                <input type="text" id='userinput' placeholder='Type your Github ID here!' value={this.state.value} onChange={this.handleChange}/>
                <button type='submit'>Submit</button> 
            </form>
        );
    }
}

