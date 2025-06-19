import React, { useEffect, useState } from "react";
import { Filter, Task } from "./types";
import TodoItem from "./components/TodoItem";

const LOCAL_STORAGE_KEY = "todo_tasks";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Task[]) : [];
  });
  const [filter, setFilter] = useState<Filter>("all");
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const text = newTask.trim();
    if (!text) return;
    const task: Task = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTasks((prev) => [...prev, task]);
    setNewTask("");
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const updateTask = (id: string, text: string) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, text } : t)));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <main className="container mx-auto max-w-lg p-4">
      <h1 className="mb-4 text-center text-3xl font-bold text-blue-600">
        To-Do List
      </h1>

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
          placeholder="Add a new task"
          className="flex-grow rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTask}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <div className="mb-4 flex justify-center gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`rounded px-3 py-1 text-sm ${
            filter === "all"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`rounded px-3 py-1 text-sm ${
            filter === "active"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`rounded px-3 py-1 text-sm ${
            filter === "completed"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Completed
        </button>
      </div>

      <ul className="rounded bg-white shadow">
        {filteredTasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onUpdate={updateTask}
          />
        ))}
        {filteredTasks.length === 0 && (
          <li className="p-4 text-center text-gray-500">No tasks found</li>
        )}
      </ul>
    </main>
  );
};

export default App; 