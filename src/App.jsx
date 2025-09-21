import { useState, useRef } from 'react'
import styled from "styled-components";
import TodoInsert from "./TodoInsert"
import TodoList from "./TodoList"

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction : column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  background-color: #F5F0E2;
`;

const Title = styled.h1`
  width: 320px;
  margin:0;
  box-sizing: border-box;

  text-align:center;

  font-size : 40px;
`;

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
