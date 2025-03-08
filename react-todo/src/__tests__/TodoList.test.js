import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';  // Path to your TodoList component
import '@testing-library/jest-dom/extend-expect';

describe('TodoList Component', () => {
  test('renders the TodoList component', () => {
    render(<TodoList />);
    const todoListTitle = screen.getByText(/Todo List/i);
    expect(todoListTitle).toBeInTheDocument();
  });

  test('renders initial todos', () => {
    render(<TodoList />);
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(3);  // 3 initial todos
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByRole('textbox');
    const addButton = screen.getByText(/Add Todo/i);

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    const newTodo = screen.getByText('New Todo');
    expect(newTodo).toBeInTheDocument();
  });

  test('toggles a todo completion', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    
    // Simulate clicking on the todo to toggle it
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');
    
    // Click again to toggle it back
    fireEvent.click(todo);
    expect(todo).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    const deleteButton = todo.nextSibling.querySelector('button');
    
    // Simulate clicking the delete button
    fireEvent.click(deleteButton);
    expect(todo).not.toBeInTheDocument();
  });
});
