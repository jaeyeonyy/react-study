import { useState } from 'react'

function TodoInsert({onInsert}){
    const [task,setTask] = useState("");

    const handleChange= (e) =>{
        setTask(e.target.value);
    }

    const handleClick = ()=>{
        if (task.trim() !== "") {
            onInsert(task);
            setTask("")
        }
    }

    return (
        <div>
            <input type="text" placeholder="할 일을 입력하세요" value={task} onChange={handleChange}/>
            <input 
                type="button"
                value="추가" 
                onClick={handleClick}/>
        </div>
    )
}

export default TodoInsert;