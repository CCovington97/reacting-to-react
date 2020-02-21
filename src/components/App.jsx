import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "some string as the value",
            placeholder: "Write something here!",
            inputVal: "",
            hasLoaded: false
        }
    }

    // componentDidMount() {
    //     this.setState({ hasLoaded: !this.state.hasLoaded })
    // }

    handleInput(e) {
        this.setState({ inputVal: e.target.value });
        console.log(this.state.inputVal)
    }

    toggleLoaded(e) {
        this.setState({ hasLoaded: !this.state.hasLoaded });
    }

    render() {
        if (this.state.hasLoaded) {
            return (
                <React.Fragment>
                <h1>{this.props.name}</h1>
                <h2>{this.state.text}</h2>
                <input type="text" onChange={(e) => this.handleInput(e)} name="state-input"
                placeholder={this.state.placeholder} value={this.state.inputVal}/>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <h1>Loading......</h1>
                <input type="button" value="Press button to start!"
                onClick={(e) => this.toggleLoaded()}/>
            </React.Fragment>
            )
    }
    }
}

export default App