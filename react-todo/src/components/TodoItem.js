import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li>
      <span
        onClick={() => onToggle(todo.id)}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;