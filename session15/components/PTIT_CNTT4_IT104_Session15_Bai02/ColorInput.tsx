import React, { Component } from 'react'
type State={
    currentInput: string,
    color: string
}
export default class ColorInput extends Component<object, State> {
    constructor(props: object){
        super(props);
        this.state={
            currentInput: "",
            color: ""
        }
    }
    handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {value}=e.target;
        this.setState({currentInput: value});
    }
    handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        this.setState({color: this.state.currentInput});
    }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
            <h2>Color: {this.state.color}</h2>
            <label htmlFor="">Mau sac: </label> <br />
            <input type="color" name="" id="" onChange={this.handleChange}/> <br />
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
