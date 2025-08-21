import React, { Component } from 'react'
type State={
    gender: string,
    selectedOption: string
}
export default class GenderRadio extends Component<object, State> {
    constructor(props: object){
        super(props);
        this.state={
            gender: "",
            selectedOption: ""
        }
    }
    handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {value}=e.target;
        this.setState({selectedOption: value})
    }
    handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        this.setState({gender: this.state.selectedOption});
    }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
            <label htmlFor="">Gioi tinh: {this.state.gender}</label> <br />
            <input type="radio" value={"male"} name='gender' onChange={this.handleChange}/> 
            <label htmlFor=""> Nam</label><br />
            <input type="radio" value={"female"} name='gender' onChange={this.handleChange}/> 
            <label htmlFor="">Nu</label><br />
            <input type="radio" value={"other"} name='gender' onChange={this.handleChange}/> 
            <label htmlFor="">Khac</label><br />
            <button>submit</button>
        </form>
      </div>
    )
  }
}
