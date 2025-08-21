import React, { Component } from 'react'
type State={
    item:{
        id: number,
        name: string,
        price: number,
        quantity: number
    }
}
export default class AddProduct extends Component<object, State> {
    constructor(props: object){
        super(props);
        this.state={
          item:{
            id: 0,
            name: "",
            price: 0,
            quantity: 0
          }
        };
    }
    handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value}=e.target;
        this.setState({item: {...this.state.item, [name]: value}})
    }
    handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      console.log(this.state.item);
    }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
            <label htmlFor="">Ma san pham</label> <br />
            <input type="text" name='id' onChange={this.handleChange}/> <br />
            <label htmlFor="">Ten san pham</label> <br />
            <input type="text" name='name' onChange={this.handleChange}/> <br />
            <label htmlFor="">Gia</label> <br />
            <input type="number" name='price' onChange={this.handleChange}/> <br />
            <label htmlFor="">So luong</label> <br />
            <input type="number" name='quantity' onChange={this.handleChange} /> <br />
            <button>Dang ky</button>
        </form>
      </div>
    )
  }
}
