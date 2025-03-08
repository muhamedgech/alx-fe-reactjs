import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add new todo');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles todo completion status', () => {
    render(<TodoList />);
    const todoText = screen.getByText('Learn React');

    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByText('Delete');
    const initialTodo = screen.getByText('Learn React');

    fireEvent.click(deleteButtons[0]);
    expect(initialTodo).not.toBeInTheDocument();
  });
});