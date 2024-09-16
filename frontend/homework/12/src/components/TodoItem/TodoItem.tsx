import React from 'react';

interface Todo {
  id: number;
  text: string;
}

interface TodoItemProps {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDeleteTodo }) => {
  return (
    <li>
      {todo.text}
      <button onClick={() => onDeleteTodo(todo.id)}>X</button>
    </li>
  );
};

export default TodoItem;
