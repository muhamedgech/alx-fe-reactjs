import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For jest-dom matchers
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList with initial todos', () => {
    render(<TodoList />);
    
    // Check if the initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Learn Jest')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('adds a new todo item', () => {
    render(<TodoList />);
    
    // Simulate user input and form submission
    fireEvent.change(screen.getByPlaceholderText('Add new todo'), {
      target: { value: 'New Todo' }
    });
    fireEvent.click(screen.getByText('Add Todo'));
    
    // Check if the new todo is added
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles todo completion status', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    
    // Simulate a click to toggle completion
    fireEvent.click(todoItem);
    
    // Verify that the todo is crossed out (completed)
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    
    // Click again to toggle back to not completed
    fireEvent.click(todoItem);
    
    // Verify that the todo is not crossed out (not completed)
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText('Delete')[0]; // Get the first "Delete" button
    
    // Click on the delete button
    fireEvent.click(deleteButton);
    
    // Verify that the todo is removed from the list
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
