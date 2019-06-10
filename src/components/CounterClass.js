import React from 'react'

export default class CounterClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.counter} times</p>
                <button onClick={
                    () =>
                        this.setState(
                            (prevState) => ({
                                counter: prevState.counter + 1
                            })
                        )
                }>
                    Click me Class
          </button>
            </div >
        );
    }
}

