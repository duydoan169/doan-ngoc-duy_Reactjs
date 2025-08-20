import React, { Component } from 'react'
type State={
    theme: string,
    language: string
}
export default class App extends Component<object, State> {
    constructor(props: object){
        super(props);
        this.state={
            theme: "dark",
            language: "vietnamese"
        }
    }
  render() {
    return (
      <div style={this.state.theme=="light" ? {backgroundColor: "white", color: "black", width: "200px", height: "50px"} : this.state.theme=="dark" ? {backgroundColor: "black", color: "white", width: "200px", height: "50px"} : {}}>
        <div>nen: {this.state.theme=="light" ? "sang" : this.state.theme=="dark" ? "toi" : ""}</div>
        <div>ngon ngu: {this.state.language=="vietnamese" ? "tieng Viet" : this.state.language=="english" ? "tieng Anh" : ""}</div>
      </div>
    )
  }
}
