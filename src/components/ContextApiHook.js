import React, { useContext } from 'react';

const NumberContext = React.createContext();

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
    const value = useContext(NumberContext);
    return <div>The answer is {value}.</div>;
}