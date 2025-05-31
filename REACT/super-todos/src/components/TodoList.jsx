import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, dispatch }) {
  if (todos.length === 0) return <p>No tasks yet!</p>;

  return (
    <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          item={todo}
          onToggle={() => dispatch({ type: 'TOGGLE', payload: todo.id })}
          onDelete={() => dispatch({ type: 'DELETE', payload: todo.id })}
          displayKey="content"
        />
      ))}
    </ul>
  );
}
export default TodoList;