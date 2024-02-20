import React from 'react';

/**
 * Interface for a Todo item.
 */
interface Todo {
  id: number;
  text: string;
}

/**
 * Props interface for the TodoItem component.
 */
interface TodoItemProps {
  /**
   * The todo item to display.
   */
  todo: Todo;
  /**
   * Function to be called when the todo item is deleted.
   * @param id - The id of the todo item to delete.
   */
  onDeleteTodo: (id: number) => void;
}

/**
 * Component representing a single todo item.
 */
const TodoItem: React.FC<TodoItemProps> = ({ todo, onDeleteTodo }) => {
  return (
    <li>
      {todo.text}
      <button onClick={() => onDeleteTodo(todo.id)}>X</button>
    </li>
  );
};

export default TodoItem;
