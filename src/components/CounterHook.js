// import the hook useState
import React, { useState } from 'react';

export default function CounterHook() {

    // Declare a new state variable, which we'll call "count"
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <p>You clicked {counter} times</p>
            <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>
                Click me Hook</button>
        </div>
    )
}
