import React, { Component } from 'react'
import './ToDoList.css'
type State={
    message: string;
    task:{
        taskName: string,
        isChecked: boolean
    },
    isUpdating: number
}
let taskStr=localStorage.getItem("tasks");
let tasks= taskStr ? JSON.parse(taskStr) : []
export default class ToDoList extends Component<object, State> {
    constructor(props: object){
        super(props);
        this.state={
            message: "",
            task:{
                taskName: "",
                isChecked: false
            },
            isUpdating: -1
        }
    }
    handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {value}=e.target
        this.setState({task: {...this.state.task, taskName: value}, message: ""});
    }
    handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        taskStr=localStorage.getItem("tasks");
        tasks= taskStr ? JSON.parse(taskStr) : []
        
        if(this.state.task.taskName==""){
            this.setState({message: "Ten cong viec khong duoc de trong"});
            return;
        }
        if(tasks.findIndex((task: {taskName: string, isChecked: boolean}) => task.taskName==this.state.task.taskName)!=-1){
            this.setState({message: "Cong viec da ton tai"});
            return;
        }
        tasks.push(this.state.task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        this.setState({task: {...this.state.task, taskName: ""}});
        alert("them cong viec thanh cong");
    }
    deleteTask=(index: number)=>{
        if(confirm(`Xoa cong viec <${tasks[index].taskName}> ?`)){
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            this.setState({task: this.state.task});
        }
    }
    toggleCheck=(index: number)=>{
        tasks[index].isChecked=!tasks[index].isChecked;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        this.setState({task: this.state.task});
    }
    updateTask=(index: number)=>{
        this.setState({task: {...this.state.task, taskName: tasks[index].taskName}, isUpdating: index});
    }
    submitUpdate=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        taskStr=localStorage.getItem("tasks");
        tasks= taskStr ? JSON.parse(taskStr) : []
        
        if(this.state.task.taskName==""){
            this.setState({message: "Ten cong viec khong duoc de trong"});
            return;
        }
        if(tasks.findIndex((task: {taskName: string, isChecked: boolean}, index: number) => task.taskName==this.state.task.taskName && index!=this.state.isUpdating)!=-1){
            this.setState({message: "Cong viec da ton tai"});
            return;
        }
        tasks[this.state.isUpdating].taskName=this.state.task.taskName;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        this.setState({task: {...this.state.task, taskName: ""}, isUpdating: -1});
        alert("sua cong viec thanh cong");
    }
  render() {
    return (
      <div className='container'>
        <h2><strong>Danh sach cong viec</strong></h2>
        <form action="" onSubmit={this.state.isUpdating==-1 ? this.handleSubmit : this.submitUpdate}>
            <input value={this.state.task.taskName} type="text" placeholder='Nhap ten cong viec' onChange={this.handleChange}/>
            <button>{this.state.isUpdating==-1 ? "Them" : "Cap nhat"}</button>            
        </form>
        <p>{this.state.message}</p>
        <div>
            {tasks.map((item: {taskName: string, isChecked: boolean}, index: number) =>{
                return <div key={index} className='taskContainer'>
                    <div>
                        <input type="checkbox" onChange={()=>this.toggleCheck(index)}/>
                        <label style={{textDecoration: item.isChecked ? "line-through" : "none"}}>{item.taskName}</label>
                    </div>
                    <div className='buttonContainer'>
                        <button id='fix' onClick={()=>this.updateTask(index)}>sua</button>
                        <button id='delete' onClick={()=>this.deleteTask(index)}>xoa</button>
                    </div>
                </div>
            })}
        </div>
      </div>
    )
  }
}
