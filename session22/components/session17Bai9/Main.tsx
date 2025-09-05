import React, { useEffect, useState } from 'react'
type Task={
    id: number,
    name: string,
    isCompleted: boolean
}
export default function Main() {
    const [task, setTask]=useState<string>("");
    const [taskList, setTaskList]=useState<Task[]>(JSON.parse(localStorage.getItem("taskList") || '[]'));
    const [error, setError]=useState<string>("");
    const [editId, setEditId]=useState<number>(-1);
    useEffect(()=>{
        localStorage.setItem("taskList", JSON.stringify(taskList))
    }, [taskList]);
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
      setTask(e.target.value);
      setError("")
    }
    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      if(task==""){
        setError("Khong duoc de trong ten cong viec");
        return;
      }
      if(taskList.some((item) => item.name==task && item.id!=editId)){
        setError("Cong viec da ton tai");
        return;
      }
      if(editId==-1){
        setTaskList([...taskList, {id: taskList.length > 0 ? taskList[taskList.length - 1].id + 1 : 1, name: task, isCompleted: false}]);
      }else{
        const updatedTaskList=taskList.map((item)=>{
        if(item.id==editId){
          item.name=task;
        }
        return item;
      });
      setTaskList(updatedTaskList);
      }
      setTask("");
      setEditId(-1);
    }
    const hanldeCheck=(id: number)=>{
      const updatedTaskList=taskList.map((item)=>{
        if(item.id==id){
          item.isCompleted=!item.isCompleted;
        }
        return item;
      });
      setTaskList(updatedTaskList);
    }
    const deleteTask=(id: number)=>{
      if(confirm("Xoa cong viec nay?")){
        setTaskList(taskList.filter((item) => item.id!=id));
      }
    }
    const updateTask=(id: number)=>{
      const target=taskList.find((item) => item.id==id);
      setTask(target!.name);
      setError("");
      setEditId(id);
    }
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='w-[1000px] border border-[#dadada] p-6 rounded-lg shadow-sm'>
        <h2 className='text-[24px] text-center'>Danh sach cong viec</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className='flex gap-[10px] m-[10px] h-[35px] justify-center'>
            <input type="text" onChange={handleChange} placeholder="Nhập tên công việc" className='w-[80%] border border-gray-300 rounded-lg p-[5px]' value={task}/>
            <button className='bg-blue-600 rounded-[6px] w-[100px] text-white h-[35px]'>{editId==-1 ? "Them" : "Sua"}</button>
          </div>
        </form>
        <p className='text-red-500 text-[15px] ml-[60px] mt-[-10px]'>{error}</p>
        <div className='flex flex-col items-center mt-[40px]'>
          {taskList.map((item, index)=>{
            return <div key={index} className='flex justify-between w-[90%]'>
              <div className='flex gap-[10px]'>
                <input type="checkbox" onChange={() => hanldeCheck(item.id)} checked={item.isCompleted}/>
                <p style={{textDecoration: `${item.isCompleted ? "line-through" : "none"}`}}>{item.name}</p>
              </div>
              <div className='flex gap-[15px]'>
                <p className='text-orange-500' onClick={()=>updateTask(item.id)}>sua</p>
                <p className='text-red-500' onClick={()=>deleteTask(item.id)}>xoa</p>
              </div>
            </div>
          })}
        </div>
        <div className='flex justify-center mt-[15px] text-green-500'>Cong viec da hoan thanh &nbsp;<b>{taskList.filter((item) => item.isCompleted==true).length}/{taskList.length}</b></div>
      </div>
    </div>
  )
}
