import React, { useReducer, useState } from 'react';
import { todoReducer, initialState } from './reducers/todoReducer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch({ type: 'ADD', payload: input.trim() });
    setInput('');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>✅ Super Todo List</h1>
      <TodoForm input={input} setInput={setInput} handleAdd={handleAdd} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}
export default App;
