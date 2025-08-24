import React, { Component } from 'react'
type State={
    currentInput: string,
    range: string
}
export default class RangeInput extends Component<object, State> {
    constructor(props: object){
        super(props);
        this.state={
            currentInput: "",
            range: ""
        }
    }
    handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {value}=e.target;
        this.setState({currentInput: value});
    }
    handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        this.setState({range: this.state.currentInput});
    }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
            <p>Tien do hoan thanh {this.state.range}%</p>
            <input type="range" name="" id="" onChange={this.handleChange}/>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
