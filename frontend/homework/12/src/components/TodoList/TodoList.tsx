import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss'
interface Todo {
  id: number;
  text: string;
}

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDeleteTodo }) => {
  return (
    <div>
      <h2 className='todo-list-heading'>Items</h2>
    <ul className='todo-list'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
      ))}
    </ul>
    </div>
  );
};

export default TodoList;
