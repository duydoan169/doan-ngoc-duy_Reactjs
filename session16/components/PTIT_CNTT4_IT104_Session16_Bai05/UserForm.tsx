import React, { Component } from 'react'
type Input={
    name: string,
    email: string,
    age: string
}
type InputResult={
    input: Input,
    isShowing: boolean
}
type State={
    inputs: Input,
    inputResult: InputResult,
    warning: string
}
export default class UserForm extends Component<object, State> {
    constructor(props: object){
        super(props);
        this.state={
            inputs: {
                name: "",
                email: "",
                age: ""
            },
            inputResult: {
                input: {
                    name: "",
                    email: "",
                    age: ""
                },
                isShowing: false
            },
            warning: ""
        }
    }
    handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value}=e.target;
        this.setState({inputs: {...this.state.inputs, [name]: value}, warning: "", inputResult: {...this.state.inputResult, isShowing: false}})
    }
    hanldeSubmit=()=>{
        if(this.state.inputs.name=="" || this.state.inputs.age == ""|| this.state.inputs.email==""){
            this.setState({warning: "khong duoc de trong du lieu"});
            return
        }
        if(!this.state.inputs.email.includes("@")){
            this.setState({warning: "email khong hop le"});
            return
        }
        if(+this.state.inputs.age < 0){
            this.setState({warning: "tuoi khong hop le"});
            return
        }
        this.setState({inputResult: {input: {...this.state.inputs}, isShowing: true}});
    }
    clearData=()=>{
        this.setState({inputs: {name: "",email: "",age: ""}, inputResult: {input: {name: "",email: "",age: ""}, isShowing: false}, warning: ""});
    }
  render() {
    return (
      <div>
        <form action="" onSubmit={(e: React.FormEvent<HTMLFormElement>)=>{e.preventDefault()}}>
            <h1>Nhap thong tin nguoi dung</h1>
            <input type="text" value={this.state.inputs.name} name='name' placeholder='Ho ten' onChange={this.handleChange}/> <br />
            <input type="text" value={this.state.inputs.email} name='email' placeholder='email' onChange={this.handleChange}/> <br />
            <input type="text" value={this.state.inputs.age} name='age' placeholder='tuoi' onChange={this.handleChange}/> <br />
            <div style={{display: "flex", justifyContent: "space-between", width: "300px", marginTop: "5px"}}>
                <button onClick={this.hanldeSubmit}>Gui</button>
                <button onClick={this.clearData}>Xoa tat ca</button>
            </div>
            <p style={{color: "red"}}>{this.state.warning}</p>
        </form>
        <div style={{ display: `${this.state.inputResult.isShowing ? "block" : "none"}`}}>
            <h1>Thong tin da nhap</h1>
            <div>Ho ten: {this.state.inputResult.input.name}</div>
            <div>Email: {this.state.inputResult.input.email}</div>
            <div>Tuoi: {this.state.inputResult.input.age}</div>
        </div>
      </div>
    )
  }
}
