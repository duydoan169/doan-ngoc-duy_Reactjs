import React, { Component } from 'react'
type State={
    time: Date,
}
export default class Clock extends Component<object, State>{
    timer: number
    constructor(props: object){
        super(props);
        this.state={time: new Date()};
        this.timer=0;
    }
    componentDidMount(): void {
        this.timer=setInterval(()=>{this.setState({time: new Date()})}, 1000)
    }
    componentWillUnmount(): void {
        clearInterval(this.timer)
    }
    getTime(time: Date){
        const hour= String(time.getHours()).padStart(2, "0");
        const minutes= String(time.getMinutes()).padStart(2, "0");
        const second= String(time.getSeconds()).padStart(2, "0");
        return `${hour} : ${minutes} : ${second}`
    }
  render() {
    return (
      <div>
        Thoi gian hien tai: {this.getTime(this.state.time)}
      </div>
    )
  }
}
