import TodoListItem from "./TodoListItem"
import styled from "styled-components";

function TodoList({todos, onRemoveTodo, onToggle}){
    const TodoListBox = styled.div`
        width: 480px;
        box-sizing:border-box;

        display: flex;
        flex-direction : column-reverse;
        align-items: center;
        justify-content: center;
        gap: 10px;
    
    `;    

    return(
        <TodoListBox>
            {todos.map((todo) => (
                <TodoListItem
                    todo={todo}
                    onToggle={onToggle}
                    onRemoveTodo={onRemoveTodo}
                />
            ))}
        </TodoListBox>
    );
}

export default TodoList;