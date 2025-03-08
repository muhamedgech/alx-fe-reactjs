import React, { useState } from 'react';

const AddTodoForm = ({ onAddTodo }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      onAddTodo(inputText);
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;