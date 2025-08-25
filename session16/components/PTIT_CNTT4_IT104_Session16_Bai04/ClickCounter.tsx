import React, { Component } from 'react'
type State={
    counter: number
}
export default class ClickCounter extends Component<object, State> {
    constructor(props: object){
        super(props);
        this.state={counter: 0}
    }
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={()=>{this.setState({counter: this.state.counter+1})}}>Click me</button>
      </div>
    )
  }
}
