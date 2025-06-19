import React, { useState } from 'react';
import type { Todo } from './TodoApp';

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete, onEdit }) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');

  const startEdit = (id: string, text: string) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleEdit = (id: string) => {
    onEdit(id, editText);
    setEditingId(null);
    setEditText('');
  };

  return (
    <ul className="w-full max-w-md mt-4">
      {todos.length === 0 && (
        <li className="text-gray-500 text-center">No tasks</li>
      )}
      {todos.map(todo => (
        <li key={todo.id} className="flex items-center bg-white rounded shadow p-2 mb-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="mr-2"
          />
          {editingId === todo.id ? (
            <>
              <input
                className="flex-1 border rounded px-2 py-1 mr-2"
                value={editText}
                onChange={e => setEditText(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleEdit(todo.id)}
                autoFocus
              />
              <button
                className="text-green-600 hover:underline mr-2"
                onClick={() => handleEdit(todo.id)}
              >
                Save
              </button>
              <button
                className="text-gray-500 hover:underline"
                onClick={() => setEditingId(null)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <span
                className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : ''}`}
                onDoubleClick={() => startEdit(todo.id, todo.text)}
              >
                {todo.text}
              </span>
              <button
                className="text-blue-600 hover:underline mr-2"
                onClick={() => startEdit(todo.id, todo.text)}
              >
                Edit
              </button>
              <button
                className="text-red-600 hover:underline"
                onClick={() => onDelete(todo.id)}
              >
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList; 