import React, { useState } from 'react';

type TodoFormProps = {
  onAdd: (text: string) => void;
};

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md mb-4">
      <input
        className="flex-1 border rounded-l px-3 py-2 focus:outline-none"
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm; 