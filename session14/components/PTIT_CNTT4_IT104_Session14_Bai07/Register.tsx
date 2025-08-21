import React, { Component } from 'react'
type User={
    name: string,
    password: string,
    email: string,
    phone: string
}
type State={
    user: User,
    message: {
      1: string,
      2: string,
      3: string,
      4: string
    }
}
export default class Register extends Component<object, State> {
  constructor(props: object){
    super(props);
    this.state={
      user:{
        name: "",
        password: "",
        email: "",
        phone: ""
      },
      message:{
        1: "",
        2: "",
        3: "",
        4: ""
      }
    }
  }
  handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value}=e.target;
    this.setState({user: {...this.state.user, [name]: value}, message: {...this.state.message, [name=="name" ? 1 : name=="email" ? 2 : name=="password" ? 3 : 4]: ""}})
  }
  handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const userStr=localStorage.getItem("users")
    const users: User[]= userStr ? JSON.parse(userStr) : [];

    if(this.state.user.name==""){
      this.setState({message: {...this.state.message, 1: "Khong duoc de trong thong tin"}});
      return;
    }
    if(this.state.user.email==""){
      this.setState({message: {...this.state.message, 2: "Khong duoc de trong thong tin"}});
      return;
    }
    if(users.findIndex((user) => user.email==this.state.user.email)!=-1){
      this.setState({message: {...this.state.message, 2: "Email da ton tai"}});
      return;
    }
    if(this.state.user.password==""){
      this.setState({message: {...this.state.message, 3: "Khong duoc de trong thong tin"}});
      return;
    }
    if(this.state.user.phone==""){
      this.setState({message: {...this.state.message, 4: "Khong duoc de trong thong tin"}});
      return;
    }
    users.push(this.state.user);
    localStorage.setItem("users", JSON.stringify(users));
    this.setState({
      user: {
        name: "",
        email: "",
        password: "",
        phone: ""
      }
    });
    alert("Dang ky thanh cong");
  }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <h2>Dang ky tai khoan</h2>
          <label htmlFor="">Name</label> <br />
          <input type="text" name='name' value={this.state.user.name} onChange={this.handleChange}/> <br />
          <p style={{color: "red", fontSize: "13px", marginTop: "2px"}}>{this.state.message[1]}</p>
          <label htmlFor="">Email</label> <br />
          <input type="text" name='email' value={this.state.user.email} onChange={this.handleChange}/> <br />
          <p style={{color: "red", fontSize: "13px", marginTop: "2px"}}>{this.state.message[2]}</p>
          <label htmlFor="">Password</label> <br />
          <input type="text" name='password' value={this.state.user.password} onChange={this.handleChange}/> <br />
          <p style={{color: "red", fontSize: "13px", marginTop: "2px"}}>{this.state.message[3]}</p>
          <label htmlFor="">Phone number</label> <br />
          <input type="text" name='phone' value={this.state.user.phone} onChange={this.handleChange}/> <br />
          <p style={{color: "red", fontSize: "13px", marginTop: "2px"}}>{this.state.message[4]}</p>
          <button style={{width: "165px", height: "23px", backgroundColor: "dodgerBlue", border: "none", color: "white"}}>Dang ky</button>
        </form>
      </div>
    )
  }
}
