import React, { Component } from 'react'
import Child from './Child'
type Product={
    id: number,
    name: string,
    price: number,
    quantity: number
}
type State={
    product: Product
}
export default class Parent extends Component<object, State> {
    constructor(props: object){
        super(props);
        this.state={
            product: {
                id: 1,
                name: "buoi ba roi",
                price: 12000,
                quantity: 6
            }
        }
    }
  render() {
    return (
      <div>
            <h2>Du lieu trong component con</h2>
            <Child product={this.state.product}></Child>
      </div>
    )
  }
}
