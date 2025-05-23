import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App () {
const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text, completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>

  );
}

export default App
