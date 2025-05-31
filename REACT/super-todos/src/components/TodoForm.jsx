import React from 'react';

function TodoForm({ input, setInput, handleAdd }) {
  return (
    <form onSubmit={handleAdd} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        value={input}
        placeholder="Add a task..."
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '0.5rem', width: '70%' }}
      />
      <button type="submit" style={{ padding: '0.5rem', marginLeft: '0.5rem' }}>
        Add
      </button>
    </form>
  );
}
export default TodoForm;
