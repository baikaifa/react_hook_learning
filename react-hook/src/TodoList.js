import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
const App = () => {
  const [todos, setTodos] = useState([]);
  const toggleComplete = i =>
    setTodos(
      todos.map((todo, k) =>
        k === i
          ? {
              ...todo,
              complete: !todo.complete
            }
          : todo
      )
    );
  return (
    <div>
      <TodoForm
        onSubmit={text => setTodos([{ text, complete: false }, ...todos])}
      />
      <div>
        {todos.map(({ text,complete },i) => (
          <div key={text} onClick={() => toggleComplete(i)}
          style={{textDecoration:complete ? "line-through":''}}
          >
            {text}
          </div>
        ))}
      </div>
      <button onClick={()=>setTodos([])}>reset</button>
    </div>
  );
};

export default App;
