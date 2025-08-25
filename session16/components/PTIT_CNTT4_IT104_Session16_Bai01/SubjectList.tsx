import React, { Component } from 'react'
type State={
    subjects: string[];
}
export default class SubjectList extends Component<object, State> {
    constructor(props: object){
        super(props);
        this.state={
            subjects: ["toan", "van", "anh", "hoa", "sinh"]
        }
    }
  render() {
    return (
      <div>
        <h1>Danh sach mon hoc</h1>
        <div>{this.state.subjects.map((item, index) =>{
            return <div style={{width: "200px", height: "30px", backgroundColor: "salmon", margin: "5px", display: "flex", justifyContent: "center", alignItems: "center"}} key={index}>{item}</div>
        })}</div>
      </div>
    )
  }
}
