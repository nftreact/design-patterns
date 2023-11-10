import React, { ChangeEvent, useMemo, useState } from 'react';
import { debounce } from 'lodash';

const SearchComponent = () => {
  const [input, setInput] = useState('');
  const [debouncedInput, setDebouncedInput] = useState('');

  const debounceSearch = useMemo(() => {
    return debounce((e: ChangeEvent<HTMLInputElement>) => {
      setDebouncedInput(e.target.value);
    }, 900);
  }, []);

  return (
    <input
      type='text'
      placeholder='Search...'
      value={input}
      onChange={(e) => {
        debounceSearch(e);
        setInput(e.target.value);
      }}
    />
  );
};

export default SearchComponent;
