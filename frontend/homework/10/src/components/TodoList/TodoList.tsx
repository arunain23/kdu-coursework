import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss'

/**
 * Interface for a Todo item.
 */
interface Todo {
  id: number;
  text: string;
}

/**
 * Props interface for the TodoList component.
 */
interface TodoListProps {
  /**
   * Array of todo items to display.
   */
  todos: Todo[];
  /**
   * Function to be called when a todo item is deleted.
   * @param id - The id of the todo item to delete.
   */
  onDeleteTodo: (id: number) => void;
}

/**
 * Component for displaying a list of todo items.
 */
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
