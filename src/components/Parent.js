import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    state = {
        currentValue: 0
    }

    addOneToValue = () => {
        this.setState({ currentValue: this.state.currentValue + 1 });
    }

    subtractOneFromValue = () => {
        this.setState({ currentValue: this.state.currentValue - 1 });
    }

    render(){
        // you'll need to pass the current value and both of the methods as props to the child below
        return(
            <div>
                <Child 
                    value={/* pass the 'currentValue' from the state here */}
                    increment={/* pass the increment method here */}
                    decrement={/* pass the decrement method here */}
                />
            </div>
        )
    }
}

export default Parent;