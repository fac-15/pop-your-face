import React from 'react';

export default class Landing extends React.Component {
    state = {
        input: '',
    };
    
    render() {
        const { input } = this.state;
        return (
            <div>
                <h1>Pop your face!</h1>
                <input type="text" id='userinput' placeholder='Type your Github ID here!' value={input} onChange={e => this.setState({input:e.target.value})}/>
                <button type='submit'>Submit</button> 
            </div>
        );
    }
}

