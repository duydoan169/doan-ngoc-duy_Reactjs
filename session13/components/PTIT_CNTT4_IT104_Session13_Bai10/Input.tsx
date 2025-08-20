import React, { Component } from 'react'
import type { ChangeEvent } from 'react'
type State={
    userInput: string
}
export default class Input extends Component<object, State> {
    constructor(props: object){
        super(props);
        this.state={
            userInput: "" 
        }
    }
    showInput=(e: ChangeEvent<HTMLInputElement>)=>{
        this.setState({userInput: e.target.value})
    }
  render() {
    return (
      <div>
        <div>Du lieu: {this.state.userInput}</div>
        <input type="text" onInput={this.showInput}/>
      </div>
    )
  }
}
