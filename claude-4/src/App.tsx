import React, { useState, useMemo } from 'react';
import { Todo, FilterType } from './types/todo';
import { useLocalStorage } from './hooks/useLocalStorage';
import { createTodo, filterTodos, getActiveCount, getCompletedCount } from './utils/todoUtils';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredTodos = useMemo(() => filterTodos(todos, filter), [todos, filter]);
  
  const counts = useMemo(() => ({
    all: todos.length,
    completed: getCompletedCount(todos),
    incomplete: getActiveCount(todos),
  }), [todos]);

  const addTodo = (text: string) => {
    const newTodo = createTodo(text);
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">To-Do List</h1>
          <p className="text-gray-600">Stay organized and get things done!</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <TodoForm onAdd={addTodo} />
          
          <TodoFilter
            currentFilter={filter}
            onFilterChange={setFilter}
            counts={counts}
          />

          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />

          {counts.completed > 0 && (
            <div className="mt-6 pt-4 border-t border-gray-200">
              <button
                onClick={clearCompleted}
                className="w-full py-2 text-sm text-gray-600 hover:text-red-600 transition-colors"
              >
                Clear Completed ({counts.completed})
              </button>
            </div>
          )}
        </div>

        <div className="text-center mt-6 text-sm text-gray-500">
          <p>Double-click on a task to edit it</p>
        </div>
      </div>
    </div>
  );
}

export default App; 