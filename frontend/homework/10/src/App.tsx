import React, { useState } from 'react';
import './App.scss';
import TodoList from './components/TodoList/TodoList';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import SearchInput from './components/searchInput/SearchInput';

interface Todo {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

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
