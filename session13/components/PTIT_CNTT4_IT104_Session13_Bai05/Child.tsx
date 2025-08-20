import React, { Component } from 'react'
type Product={
    id: number,
    name: string,
    price: number,
    quantity: number
}
type Props={
    product: Product;
}
export default class Child extends Component<Props> {
  render() {
    return (
      <div>
        <div>id: {this.props.product.id}</div>
        <div>name: {this.props.product.name}</div>
        <div>price: {this.props.product.price} d</div>
        <div>quantity: {this.props.product.quantity}</div>
      </div>
    )
  }
}
