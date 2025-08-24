import React, { Component } from 'react'
type State={
    currentInput: string,
    date: string
}
export default class DateInput extends Component<object, State> {
    constructor(props: object){
        super(props);
        this.state={
            currentInput: "",
            date: ""
        }
    }
    handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {value}=e.target;
        this.setState({currentInput: value});
    }
    handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        this.setState({date: this.state.currentInput});
    }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
            <p>Ngay sinh: {this.state.date}</p>
            <input type="date" name="" id="" onChange={this.handleChange}/> <br />
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
