import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "some string as the value"
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>{this.props.name}</h1>
                <h2>{this.state.text}</h2>
            </React.Fragment>
        )
    }
}

export default App