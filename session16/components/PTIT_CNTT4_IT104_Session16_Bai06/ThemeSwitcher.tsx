import React, { Component } from 'react'
type State={
    isDarkMode: boolean
}
export default class ThemeSwitcher extends Component<object, State> {
    constructor(props: object){
        super(props);
        this.state={isDarkMode: false}
    }
  render() {
    return (
      <div style={{backgroundColor:  `${this.state.isDarkMode ? "black" : "white"}`, width: "300px", height: "300px"}}>
        <h1 style={{color: `${this.state.isDarkMode ? "white" : "black"}`}}>{this.state.isDarkMode ? "Che do toi dang bat" : "Che do sang dang bat"}</h1>
        <button onClick={()=>{this.setState({isDarkMode: !this.state.isDarkMode})}} style={{backgroundColor: "dodgerblue", color: "white", width: "100px", height: "35px", border: "none", borderRadius: "6px"}}>Chuyen theme</button>
      </div>
    )
  }
}
