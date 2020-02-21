import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "some string as the value",
            placeholder: "Write something here!",
            inputVal: ""
        }
    }

    handleInput(e) {
        this.setState({ inputVal: e.target.value });
        console.log(this.state.inputVal)
    }

    render() {
        return (
            <React.Fragment>
                <h1>{this.props.name}</h1>
                <h2>{this.state.text}</h2>
                <input type="text" onChange={(e) => this.handleInput(e)} name="state-input"
                placeholder={this.state.placeholder} value={this.state.inputVal}/>
            </React.Fragment>
        )
    }
}

export default App