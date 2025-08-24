import React, { Component } from 'react'
type Student={
    id: string,
    name: string,
    birthDate: string,
    email: string,
    status: boolean,
}
type Props={
    student: Student,
    index: number
}
export default class StudentInfo extends Component<Props> {
    constructor(props: Props){
        super(props);
    }
    render() {
    return (
        <tr>
            <td><center>{this.props.index}</center></td>
            <td><center>{this.props.student.id}</center></td>
            <td><center>{this.props.student.name}</center></td>
            <td><center>{this.props.student.birthDate}</center></td>
            <td><center>{this.props.student.email}</center></td>
            <td><center>{this.props.student.status ? <div style={{ padding: "3px", width: "fit-content", height: "20px", backgroundColor: "green", color: "white", borderRadius: "5px"}}>Dang hoat dong</div> : <div style={{ padding: "3px", width: "fit-content", height: "20px", backgroundColor: "salmon", color: "white", borderRadius: "5px"}}>Ngung hoat dong</div>}</center></td>
            <td style={{display: "flex", justifyContent: "center", gap: "5px"}}>
                    <button style={{backgroundColor: "violet", border: 0, color: "white"}}>Chan</button>
                    <button style={{backgroundColor: "orange", border: 0, color: "white"}}>Sua</button>
                    <button style={{backgroundColor: "tomato", border: 0, color: "white"}}>Xoa</button>
            </td>
        </tr>
    )
  }
}
