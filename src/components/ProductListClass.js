import React, { Component } from 'react'

export default class ProductListClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [{ id: 1, name: 'Doom' }, { id: 2, name: 'Quake' }],
            cart: []
        };
    }

    addToCart = (p) => {
        const newCartItem = { ...p };
        //this.setState({ cart: [...this.state.cart, newCartItem] });
        this.setState(prevState => ({
            cart: [
                ...prevState.cart,
                newCartItem
            ]
        }))
    }


    render() {
        return (
            <div>
                <h2>Cart items Class</h2>
                {this.state.cart.map((item, index) => <div key={index}>{item.name}</div>)}
                <h2>Products</h2>
                {this.state.products.map(p => <div key={p.id
                } onClick={() => this.addToCart(p)}>{p.name}</div>)
                }
            </div>
        )
    }
}
