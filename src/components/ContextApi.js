import React from 'react'
// Create a Context
const NumberContext = React.createContext();
// It returns an object with 2 values:
// { Provider, Consumer }

export default function Context() {
    // Use the Provider to make a value available to all
    // children and grandchildren
    return (
        <NumberContext.Provider value={42}>
            <Display />
        </NumberContext.Provider>
    );
}

function Display() {
    // Use the Consumer to grab the value from context
    // Notice this component didn't get any props!
    return (
        <NumberContext.Consumer>
            {value => <div>The answer is {value}.</div>}
        </NumberContext.Consumer>
    );
}