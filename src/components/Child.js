import React, { Component } from 'react';

class Child extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <h3>Current Value: {this.props.value}</h3>
                <button onClick={this.props.increment}>Increment</button>
                <button onClick={this.props.decrement}>Decrement</button>
            </div>
        )
    }
}

export default Child;