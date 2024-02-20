import React from 'react';
import './SearchInput.scss'

/**
 * Props interface for the SearchInput component.
 */
interface SearchInputProps {
  /**
   * Function to be called when the search term changes.
   * @param term - The new search term.
   */
  onSearch: (term: string) => void;
}

/**
 * Component for input field used for searching.
 */
const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  /**
   * Handler function for input change.
   * Calls the onSearch function with the new search term.
   * @param event - The change event.
   */
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
