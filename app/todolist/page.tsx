'use client';
import React, { useState } from 'react';

function Todolist() {
  const [value, setValue] = useState<string>('');
  return (
    <section
      style={{ width: '100%', height: '100vh', alignItems: 'center', display: 'flex', justifyContent: 'center' }}
    >
      <div style={{ width: '60%', minHeight: '500px', border: '1px solid blue', borderRadius: '8px' }}>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          style={{ paddingBlock: '10px', width: '50%' }}
        />
      </div>
    </section>
  );
}

export default Todolist;
