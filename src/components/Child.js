import React, { Component } from 'react';

class Child extends Component {
    constructor(props){
        super(props);

    }

    render(){
        // here you'll need to fill in the current value and the onClicks for both buttons. All three of those things are being passed as props right now from the parent.
        return(
            <div>
                <h3>Current Value: {/* the current value prop here */}</h3>
                <button onClick={/* add method to increment here */}>Increment</button>
                <button onClick={/* add method to decrement here */}>Decrement</button>
            </div>
        )
    }
}

export default Child;