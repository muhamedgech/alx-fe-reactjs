import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList', () => {
  test('renders the TodoList component correctly', () => {
    render(<TodoList />);
    // Check if Todo List heading is present
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Learn Jest')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('adds a new todo item', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add new todo');
    const button = screen.getByText('Add Todo');

    // Simulate user input and form submission
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    // Verify that the new todo is added
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles the completion status of a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');

    // Click on the todo to toggle its completed status
    fireEvent.click(todo);

    // Verify that the todo's text is crossed out
    expect(todo).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText('Delete')[0];

    // Click delete button
    fireEvent.click(deleteButton);

    // Verify that the todo item is removed from the list
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
