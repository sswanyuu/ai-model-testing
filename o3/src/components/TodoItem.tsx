import React, { useState } from "react";
import { Task } from "../types";

interface TodoItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, text: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onToggle, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    const trimmed = editText.trim();
    if (trimmed) {
      onUpdate(task.id, trimmed);
    }
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between border-b border-gray-200 py-2">
      <div className="flex items-center gap-2 flex-1">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-4 w-4 text-blue-600 rounded focus:ring-0"
        />
        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
            }}
            className="flex-1 rounded border px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        ) : (
          <span
            className={`flex-1 text-sm ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {task.text}
          </span>
        )}
      </div>
      <div className="flex gap-2 ml-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="rounded bg-green-500 px-2 py-1 text-xs text-white hover:bg-green-600"
            >
              Save
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setEditText(task.text);
              }}
              className="rounded bg-gray-500 px-2 py-1 text-xs text-white hover:bg-gray-600"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="rounded bg-yellow-500 px-2 py-1 text-xs text-white hover:bg-yellow-600"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="rounded bg-red-500 px-2 py-1 text-xs text-white hover:bg-red-600"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem; 