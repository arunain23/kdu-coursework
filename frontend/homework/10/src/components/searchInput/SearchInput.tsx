import React from 'react';
import './SearchInput.scss'

interface SearchInputProps {
  onSearch: (term: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <input className='search-bar'
      type="text"
      placeholder="Search Items..."
      onChange={handleChange}
    />
  );
};

export default SearchInput;
