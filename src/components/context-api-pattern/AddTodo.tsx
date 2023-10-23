'use client';

import React, { useState } from 'react';
import { useTodoDispatch } from './TodoContext';

const AddTodo: React.FC = () => {
  const [text, setText] = useState('');
  const dispatch = useTodoDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: { text } });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default AddTodo;
