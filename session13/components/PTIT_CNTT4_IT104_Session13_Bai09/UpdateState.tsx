import React, { Component } from 'react'
type State={
    company: string
}
export default class UpdateState extends Component<object, State>{
    constructor(props: object){
        super(props);
        this.state={
            company: "Rikkei Academy"    
        }
    }
    changeCompany=() => {
        this.setState({company: this.state.company=="Rikkei Academy"? "Rikkei Soft" : "Rikkei Academy"})
    }
    render() {
    return (
      <div>
        <div>ten cong ty: {this.state.company}</div>
        <br />
        <button onClick={this.changeCompany}>change</button>
      </div>
    )
  }
}
