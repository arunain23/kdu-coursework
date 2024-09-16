import React, { useState } from 'react';
import './App.scss';
import TodoList from './components/TodoList/TodoList';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import SearchInput from './components/searchInput/SearchInput';
import { TodoProvider } from './TodoProvider';
import Main from './main';

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
    <TodoProvider>
<Main/>
    </TodoProvider>
   
  );
};

export default App;
