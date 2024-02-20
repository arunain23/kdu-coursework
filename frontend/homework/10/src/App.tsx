import React, { useState } from 'react';
import './App.scss';
import TodoList from './components/TodoList/TodoList';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import SearchInput from './components/searchInput/SearchInput';

/**
 * Interface for a Todo item.
 */
interface Todo {
  id: number;
  text: string;
}

/**
 * Main component representing the Todo list application.
 */
const App: React.FC = () => {
  // State for storing the list of todos
  const [todos, setTodos] = useState<Todo[]>([]);

  // State for storing the search term
  const [searchTerm, setSearchTerm] = useState<string>('');

  /**
   * Handler function to add a new todo item to the list.
   * @param text - The text of the todo item to add.
   */
  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
    };
    setTodos([...todos, newTodo]);
  };

  /**
   * Handler function to delete a todo item from the list.
   * @param id - The id of the todo item to delete.
   */
  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  /**
   * Handler function to update the search term.
   * @param term - The new search term.
   */
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  // Filter the todos based on the search term
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <div className="upper-container">
        <div className='header'>Item Lister</div>
        <div><SearchInput onSearch={handleSearch} /></div>
      </div>
      <div className="lower-container">
        <TodoList todos={filteredTodos} onDeleteTodo={handleDeleteTodo} />
        <div>
          {filteredTodos.length === 0 && <p>No Match found</p>}
        </div>
        <div className='add-button-container'>
          <h2>Add Items</h2>
          <AddTodoForm onAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
