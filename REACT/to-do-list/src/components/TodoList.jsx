function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <ul>
       {todos.map((todo) => (
        <li key={todo.id} className="flex items-center justify-between my-2">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox" className="mr-2"
              checked={todo.completed} onChange={() => toggleTodo(todo.id)}
            />
            
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>

          </label>
          <button
            onClick={() => removeTodo(todo.id)}
            className="ml-4 text-red-500 hover:text-red-700">
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}
export default TodoList