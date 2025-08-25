import React, { Component } from 'react'
type Button={
  label: string,
  color: string,
  backgroundColor: string
  textDecoration?: string
}
type State={
    buttons: Button[]
}
export default class Buttons extends Component<object, State> {
  constructor(props: object){
    super(props);
    this.state={
      buttons:[
        {
          label: "Primary",
          color: "white",
          backgroundColor: "dodgerblue"
        },
        {
          label: "Secondary",
          color: "white",
          backgroundColor: "grey"
        },
        {
          label: "Success",
          color: "white",
          backgroundColor: "darkgreen"
        },
        {
          label: "Warning",
          color: "black",
          backgroundColor: "orange"
        },
        {
          label: "Danger",
          color: "white",
          backgroundColor: "orangered"
        },
        {
          label: "Info",
          color: "black",
          backgroundColor: "cyan"
        },
        {
          label: "Light",
          color: "black",
          backgroundColor: "white"
        },
        {
          label: "Dark",
          color: "white",
          backgroundColor: "black"
        },
        {
          label: "Link",
          color: "royalblue",
          backgroundColor: "#323234",
          textDecoration: "underline"
        },
      ]
    }
  }
  render() {
    return (
      <div style={{backgroundColor: "#323234", height: "100px"}}>
        {this.state.buttons.map((item, index)=>{
          return <button key={index} style={{width: "100px", height: "30px", borderRadius: "6px", color: `${item.color}`, border: "none", backgroundColor: `${item.backgroundColor}`, marginLeft: "5px"}}>{item.label}</button>
        })}
      </div>
    )
  }
}
