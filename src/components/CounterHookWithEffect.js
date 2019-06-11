// import the hook useState
import React, { useState, useEffect } from 'react';

export default function CounterHook() {


    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${counter} times`;
    });

    // Declare a new state variable, which we'll call "count"
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <p>You clicked {counter} times</p>
            <button onClick={() => setCounter(counter + 1)}>
                Click me Hook</button>
        </div>
    )
}
