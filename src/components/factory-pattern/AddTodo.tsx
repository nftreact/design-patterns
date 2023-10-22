'use client';

import React, { useState } from 'react';
import { useTodoContext } from './TodoProvider';

const AddTodo = () => {
  const { addTodo } = useTodoContext();
  const [input, setInput] = useState('');

  return (
    <form
      style={{ display: 'flex', gap: '5px' }}
      onSubmit={(e) => {
        e.preventDefault();
        if (input.trim() !== '') {
          addTodo(input);
          setInput('');
        }
      }}
    >
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
      <button style={{ padding: '5px', borderRadius: '4px' }} type='submit'>
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
