import React, { Component } from 'react'
type State={
    counter: number
}
export default class Counter extends Component<object, State> {
    counterTimer: number
    constructor(props: object){
        super(props);
        this.state={
            counter: 0
        }
        this.counterTimer= 0
    }
    componentDidMount(): void {
        this.counterTimer=setInterval(()=>{this.setState({counter: this.state.counter == 10 ? 0 : this.state.counter+1})}, 1000);
    }
    componentWillUnmount(): void {
        clearInterval(this.counterTimer);
    }
  render() {
    return (
      <div style={{fontSize: "30px"}}>
        {this.state.counter}
      </div>
    )
  }
}
