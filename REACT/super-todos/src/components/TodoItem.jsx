import React from 'react';

function TodoItem({ item, onToggle, onDelete, displayKey }) {
  return (
    <li style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
      <label style={{ flexGrow: 1 }}>
        <input type="checkbox" checked={item.completed} onChange={onToggle} />
        <span
          style={{
            marginLeft: '10px',
            textDecoration: item.completed ? 'line-through' : 'none',
            color: item.completed ? '#888' : '#000',
          }}
        >
          {item[displayKey]}
        </span>
      </label>
      <button onClick={onDelete} style={{ marginLeft: '10px', color: 'red' }}>
        Delete
      </button>
    </li>
  );
}
export default TodoItem; 