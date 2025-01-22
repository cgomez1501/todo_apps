import React, { useState } from 'react';
import TodoTable from '../TodoTables/TodoTables';
import Container from 'react-bootstrap/Container';
import TodoInput from '../TodoInput/TodoInput';
import FilterButtons from '../Buttons/Buttons';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const handleAddTask = (taskName) => {
    const newTodo = { name: taskName, completed: false };
    setTodos([...todos, newTodo]);
  };

  const handleToggleCompleted = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (index) => {
    const newTodoList = todos.filter((_, i) => i !== index);
    setTodos(newTodoList);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true; 
  });

  return (
    <Container className="mt-5">
    <div className="todo-app-container">
      <TodoInput onAddTask={handleAddTask} />
      <FilterButtons currentFilter={filter} onFilterChange={setFilter} />
      <TodoTable
        todos={filteredTodos}
        onToggleCompleted={handleToggleCompleted}
        onDelete={handleDelete}
      />
    </div>
    </Container>
  );
}
