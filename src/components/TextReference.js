import React, { useRef } from 'react';

export default function TextReference() {
    //creating the ref by passing initial value null
    const nameRef = useRef(null);

    function handleFocus() {
        //current is pointing to input element when component is mounts to dom
        const theRef = nameRef.current.value
        console.log(theRef)
    }
    return (
        <div>
            <input ref={nameRef} defaultValue="leandro" placeholder="name" />
            <button onClick={(handleFocus)}>Get Refs</button>
        </div>
    )

}