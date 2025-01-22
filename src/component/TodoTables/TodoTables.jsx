import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function TodoTable({ todos, onToggleCompleted, onDelete }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Tasks</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? 'black' : 'black',
              }}
            >
              {todo.name}
            </td>
            <td>
              <Button
                variant="info"
                onClick={() => onToggleCompleted(index)}
                className="me-2"
              >
                {todo.completed ? 'Undo' : 'Complete'}
              </Button>
              <Button variant="danger" onClick={() => onDelete(index)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}