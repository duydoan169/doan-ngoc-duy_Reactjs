import React, { Component } from 'react'
type State={
    email: string,
}
export default class ColorInput extends Component<object, State> {
    constructor(props: object){
        super(props);
        this.state={
            email: "",
        }
    }
    handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {value}=e.target;
        this.setState({email: value});
    }
    handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(this.state);
    }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
            <h2>Form</h2>
            <label htmlFor="">Email: </label> <br />
            <input type="text" name="" id="" onChange={this.handleChange}/>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
