import React, { Component } from 'react'
import TableHead from './TableHead'
import StudentInfo from './StudentInfo'
type Student={
    id: string,
    name: string,
    birthDate: string,
    email: string,
    status: boolean,
}
type State={
    students: Student[],
}
export default class StudentList extends Component<object, State> {
  constructor(props: object){
        super(props);
        this.state={
            students:[
                {
                    id: "SV001",
                    name: "Nguyen Van A",
                    birthDate: "21/12/2023",
                    email: "nva@gmail.com",
                    status: true
                },
                {
                    id: "SV002",
                    name: "Nguyen Thi B",
                    birthDate: "15/8/2023",
                    email: "ntb@gmail.com",
                    status: false
                }
            ]
        }
    }
  render() {
    return (
      <div style={{width: "1000px", margin: "auto"}}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h2><strong>Quan ly sinh vien</strong></h2>
            <button style={{color: "white", backgroundColor: "dodgerBlue", border: "none", height: "35px", width: "150px", borderRadius: "7px"}}>Them moi sinh vien</button>
        </div>
        <div style={{marginLeft: "630px", marginTop: "-10px"}}>
            <select style={{borderRadius: "4px", height: "25px", border: "1px solid grey"}} name="" id="">
              <option value="" disabled selected hidden>Sap xep theo tuoi</option>
            </select>
            <input type="text" placeholder='Tim kiem tu khoa theo ten hoac email' style={{width: "230px", height: "23px", borderRadius: "5px", border: "1px solid grey", marginLeft: "6px"}}/>
        </div>
        <table style={{width: "100%"}}>
          <TableHead></TableHead>
          <tbody>
            {this.state.students.map((item, index)=>{
              return <StudentInfo key={index} student={item} index={index+1}></StudentInfo>
            })}
          </tbody>
        </table>
        <div style={{display: "flex", flexDirection: "row-reverse", marginTop: "10px", marginRight: "10px"}}>
          <div style={{display: "flex"}}>
            <div style={{width: "35px", height: "35px", borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}> &lt; </div>
            <div style={{width: "35px", height: "35px", borderRadius: "100%", backgroundColor: "dodgerblue", display: "flex", justifyContent: "center", alignItems: "center", color: "white"}}> 1 </div>
            <div style={{width: "35px", height: "35px", borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}> 2 </div>
            <div style={{width: "35px", height: "35px", borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}> 3 </div>
            <div style={{width: "35px", height: "35px", borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}> &gt; </div>
          </div>
        </div>
      </div>
    )
  }
}
