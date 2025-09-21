import styled from "styled-components";

const TodoListItemBox = styled.div`
    width: 400px;
    height: 50px;
    border-radius: 10px;

    display: flex;
    flex-direction : row;
    align-items: center;
    justify-content: space-between;
    justify-content: flex-start;
    gap: 12px;
    background-color:white;
`;

const CheckBox = styled.input`
    transform: scale(1.5);
    margin-left : 15px;
    cursor: pointer;
`;

const TaskText = styled.span`
    text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
    font-size:16px;
`;

const DeleteButton = styled.input`
    width: 60px;
    height: 35px;

    background-color: ${(props) => props.background || "red"};
    color: white;

    margin-right: 8px;

    border-radius: 8px;
    border: none;
    font-size: 14px;

    cursor: pointer;

    text-align: center;
    &:hover {
        background-color: ${(props) => props.hoverColor || "#555"};
    }
`;

function TodoListItem({todo, onRemoveTodo, onToggle}){
    return(
        <TodoListItemBox>
            <CheckBox type="checkbox" checked={todo.completed}  onChange={() => onToggle(todo.id)}/>
            <TaskText completed={todo.completed}> {todo.task} </TaskText>
            <DeleteButton type="button" color="red" value="삭제"
            onClick={()=>{
                onRemoveTodo(todo.id)}}/>
        </TodoListItemBox>
    )
}

export default TodoListItem;