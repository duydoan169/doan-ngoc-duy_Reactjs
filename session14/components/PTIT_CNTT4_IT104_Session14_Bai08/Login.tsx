import React, { Component } from 'react'
type State={
    user: {
        email: string,
        password: string
    }
    message: {
        1: string,
        2: string
    }
}
export default class Login extends Component<object, State> {
    constructor(props: object){
        super(props);
        this.state={
            user: {
                email: "",
                password: ""
            },
            message:{
                1: "",
                2: ""
            }
        }
    }
    handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value}=e.target;
        this.setState({user: {...this.state.user, [name]: value}, message: {1:"", 2:""}})
    }
    handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const userStr=localStorage.getItem("users");
        const users= userStr ? JSON.parse(userStr) : [];

        if(this.state.user.email==""){
            this.setState({message: {...this.state.message, 1: "khong duoc de trong thong tin"}});
            return;
        }
        if(this.state.user.password==""){
            this.setState({message: {...this.state.message, 2: "khong duoc de trong thong tin"}});
            return;
        }
        for(let i=0; i<users.length; i++){
            if(users[i].email==this.state.user.email && users[i].password==this.state.user.password){
                this.setState({
                    user:{
                        email: "",
                        password: ""
                    }
                })
                alert("Dang nhap thanh cong");
                return;
            }
        }
        this.setState({message: {1: "thong tin khong chinh xac", 2: "thong tin khong chinh xac"}});
    }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
            <h2>Dang nhap tai khoan</h2>
            <label htmlFor="">Email</label> <br />
            <input type="text" name='email' value={this.state.user.email} onChange={this.handleChange}/> <br />
            <p style={{color: "red", fontSize: "13px", marginTop: "2px"}}>{this.state.message[1]}</p>
            <label htmlFor="">Password</label> <br />
            <input type="text" name='password' value={this.state.user.password} onChange={this.handleChange}/> <br />
            <p style={{color: "red", fontSize: "13px", marginTop: "2px"}}>{this.state.message[2]}</p>
            <button style={{width: "165px", height: "23px", backgroundColor: "dodgerBlue", border: "none", color: "white"}}>Dang nhap</button>
        </form>
      </div>
    )
  }
}
