import React, { Component } from 'react'
import './ToDoList.css'
type Task={
    id: number,
    name: string,
    assign: string,
    status: boolean,
    createdAt: string
}
type State={
    tasks: Task[];
}
function getTime(){
    const time=new Date();
    const day=String(time.getDate()).padStart(2, "0");
    const month=String(time.getMonth()).padStart(2, "0");
    const year=String(time.getFullYear());
    const hour=String(time.getHours()).padStart(2, "0");
    const minute=String(time.getMinutes()).padStart(2, "0");
    const second=String(time.getSeconds()).padStart(2, "0");
    return `${day}/${month}/${year} ${hour}:${minute}:${second}`
}
export default class ToDoList extends Component<object, State> {
    constructor(props: object){
        super(props);
        this.state={
            tasks: [
                {id: 1, name: "thiet ke giao dien Header", assign: "Nguyen Van A", status: false, createdAt: getTime()},
                {id: 2, name: "thiet ke giao dien Footer", assign: "Nguyen Thi B", status: true, createdAt: getTime()}
            ]
        }
    }
  render() {
    return (
      <div>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Ten cong viec</th>
                    <th>nguoi thuc hien</th>
                    <th>Trang thai</th>
                    <th>Thoi gian tao</th>
                    <th>Chuc nang</th>
                </tr>
                {this.state.tasks.map((item: Task, index) => {
                    return <tr key={index}>
                        <td style={{textAlign: "center"}}>{item.id}</td>
                        <td style={{textAlign: "center"}}>{item.name}</td>
                        <td style={{textAlign: "center"}}>{item.assign}</td>
                        <td style={{textAlign: "center"}}><div style={{margin: "auto"}} className={item.status ? "done" : "notDone"}>{item.status ? "Hoan thanh" : "Chua hoan thanh"}</div></td>
                        <td style={{textAlign: "center"}}>{item.createdAt}</td>
                        <td style={{textAlign: "center"}}><button className='fix'>Sua</button> <button className='delete'>Xoa</button></td>
                    </tr>
                })}
            </thead>
        </table>
      </div>
    )
  }
}
