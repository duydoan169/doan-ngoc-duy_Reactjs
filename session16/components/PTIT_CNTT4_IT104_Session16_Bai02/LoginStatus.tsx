import React, { Component } from 'react'
type State={
    isLoggedIn: boolean
}
export default class LoginStatus extends Component<object, State> {
    constructor(props: object){
        super(props);
        this.state={
            isLoggedIn: false
        }
    }
  render() {
    return (
      <div>
        {this.state.isLoggedIn ? <h1>Xin chao, user!</h1> : <h1>Vui long dang nhap de tiep tuc</h1>}
        <button onClick={()=>{this.setState({isLoggedIn: !this.state.isLoggedIn})}}>{this.state.isLoggedIn ? "Dang xuat" : "Dang nhap"}</button>
      </div>
    )
  }
}
