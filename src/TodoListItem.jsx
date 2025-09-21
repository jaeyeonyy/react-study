import styled from "styled-components";
function TodoListItem({todo, onRemoveTodo, onToggle}){
    const TaskText = styled.span`
    text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
    `;

    const DeleteButton = styled.input`
        width: 120px;
        height: 45px;
        background-color: ${(props) => props.background || "gray"};
        color: ${(props) => props.color || "white"};
        padding: 10px;
        border-radius: 5px;
        border: none;
        font-size: 14px;
        cursor: pointer;
        margin-top: 10px;
        text-align: center;
        &:hover {
            background-color: ${(props) => props.hoverColor || "#555"};
        }
    `;
    return(
        <div>
            <input type="checkbox" checked={todo.completed}  onChange={() => onToggle(todo.id)}/>
            <TaskText completed={todo.completed}> {todo.task} </TaskText>
            <DeleteButton type="button" color="red" value="삭제"
            onClick={()=>{
                onRemoveTodo(todo.id)}}/>
        </div>
    )
}

export default TodoListItem;