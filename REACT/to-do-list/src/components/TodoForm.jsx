import React, {useState} from "react";

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text" className="border p-2 w-64"
        placeholder="Add a task..."
        value={input} onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
        Add
      </button>
    </form>
  );
}
export default TodoForm 