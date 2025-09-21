import { useState } from 'react'
import styled from "styled-components";

const TodoInsertBox = styled.div`
    width: 400px;
    height: 40px;
    box-sizing:border-box;

    display: flex;
    flex-direction : row;
    align-items: center;
    justify-content: space-between;
`;

const TodoInput = styled.input`
    width: 330px;
    height: 40px;
    border-radius: 10px;
    border-style: solid;
    border-color: #E5E4DB;
    border-width: 1px;
    padding-left: 10px;
    box-sizing:border-box;

`;

const TodoAddButton = styled.input`
    width: 60px;
    height: 35px;
    border-radius: 10px;
    box-sizing:border-box;
    border: none; 

    font-size: 14px;

    color:white;

    background-color:#49B04D;

    cursor: pointer;

`;

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
        <TodoInsertBox>
            <TodoInput type="text" placeholder="할 일을 입력하세요" value={task} onChange={handleChange}/>
            <TodoAddButton 
                type="button"
                value="추가" 
                onClick={handleClick}/>
        </TodoInsertBox>
    )
}

export default TodoInsert;