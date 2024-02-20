import React, { useState } from 'react';
import './AddTodoForm.scss';

/**
 * Props interface for the AddTodoForm component.
 */
interface AddTodoFormProps {
  /**
   * Function to be called when a new todo is added.
   * @param text - The text of the new todo.
   */
  onAddTodo: (text: string) => void;
}

/**
 * Component for adding a new todo.
 */
const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
  // State to store the text of the new todo
  const [text, setText] = useState<string>('');

  /**
   * Handler function for form submission.
   * Prevents default form submission behavior, adds a new todo if the text is not empty, and resets the text input.
   * @param event - The form submission event.
   */
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (text.trim()) {
      onAddTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text" className='addInput'
        // placeholder="Add a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddTodoForm;
