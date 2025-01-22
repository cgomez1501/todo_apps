import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

export default function FilterButtons({ currentFilter, onFilterChange }) {
  return (
    
    <ButtonGroup className="mb-3">
      <Button
        variant={currentFilter === 'all' ? 'primary' : 'outline-primary'}
        onClick={() => onFilterChange('all')}
      >
        All
      </Button>
      <Button
        variant={currentFilter === 'completed' ? 'success' : 'outline-success'}
        onClick={() => onFilterChange('completed')}
      >
        Completed
      </Button>
      <Button
        variant={currentFilter === 'incomplete' ? 'warning' : 'outline-warning'}
        onClick={() => onFilterChange('incomplete')}
      >
        Incomplete
      </Button>
    </ButtonGroup>
  );
}