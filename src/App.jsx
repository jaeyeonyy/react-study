import { useState, useRef } from 'react'
import styled from "styled-components";
import TodoInsert from "./TodoInsert"
import TodoList from "./TodoList"

function App() {
  const [todos, setTodos] = useState([
    { id: 0, task: "할 일1", completed: false },
    { id: 1, task: "할 일2", completed: true },
    { id: 2, task: "할 일3", completed: false }
  ]);
  const nextId = useRef(todos.length);

  const handleInsert = (task)=>{
    setTodos([
      ...todos,
      { id : nextId.current, task, completed: false }
    ]);
    nextId.current +=1;
  };

  const handleToggle = (id)=>{
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const handleRemove = (id)=>{
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const Container = styled.div`
    display: flex;
    flex-direction : column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #f8f8f8;
  `;

  const Title = styled.h1`
  `;

  return (
    <Container>
      <Title>TodoList</Title>
      <TodoInsert
        onInsert={handleInsert}/>
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onRemoveTodo={handleRemove}/>
    </Container>
  );
}

export default App
