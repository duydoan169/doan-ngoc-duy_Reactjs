import React, { Component } from 'react'
import './ToDoList.css'
type State={
    message: string;
    task: string
}
let taskStr=localStorage.getItem("tasks");
let tasks= taskStr ? JSON.parse(taskStr) : []
export default class ToDoList extends Component<object, State> {
    constructor(props: object){
        super(props);
        this.state={
            message: "",
            task: ""
        }
    }
    handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {value}=e.target
        this.setState({task: value, message: ""});
    }
    handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        taskStr=localStorage.getItem("tasks");
        tasks= taskStr ? JSON.parse(taskStr) : []
        
        if(this.state.task==""){
            this.setState({message: "Ten cong viec khong duoc de trong"});
            return;
        }
        if(tasks.findIndex((task: string) => task==this.state.task)!=-1){
            this.setState({message: "Cong viec da ton tai"});
            return;
        }
        tasks.push(this.state.task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        this.setState({task: ""});
        alert("them cong viec thanh cong");
    }
    deleteTask=(index: number)=>{
        if(confirm(`Xoa cong viec <${tasks[index]}> ?`)){
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            this.setState({task: this.state.task});
        }
    }
  render() {
    return (
      <div className='container'>
        <h2><strong>Danh sach cong viec</strong></h2>
        <form action="" onSubmit={this.handleSubmit}>
            <input value={this.state.task} type="text" placeholder='Nhap ten cong viec' onChange={this.handleChange}/>
            <button>Them</button>            
        </form>
        <p>{this.state.message}</p>
        <div>
            {tasks.map((item: string, index: number) =>{
                return <div key={index} className='taskContainer'>
                    <div>
                        <input type="checkbox" />
                        <label>{item}</label>
                    </div>
                    <div className='buttonContainer'>
                        <button id='fix'>sua</button>
                        <button id='delete' onClick={()=>this.deleteTask(index)}>xoa</button>
                    </div>
                </div>
            })}
        </div>
      </div>
    )
  }
}
