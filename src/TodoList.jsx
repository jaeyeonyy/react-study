import TodoListItem from "./TodoListItem"

function TodoList({todos, onRemoveTodo, onToggle}){
    

    return(
        <div>
            {todos.slice().reverse().map((todo) => (
                <TodoListItem
                    todo={todo}
                    onToggle={onToggle}
                    onRemoveTodo={onRemoveTodo}
                />
            ))}
        </div>
    );
}

export default TodoList;