import { Todo, FilterType } from '../types/todo';

export const generateId = (): string => {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
};

export const createTodo = (text: string): Todo => {
  return {
    id: generateId(),
    text: text.trim(),
    completed: false,
    createdAt: new Date(),
  };
};

export const filterTodos = (todos: Todo[], filter: FilterType): Todo[] => {
  switch (filter) {
    case 'completed':
      return todos.filter(todo => todo.completed);
    case 'incomplete':
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
};

export const getActiveCount = (todos: Todo[]): number => {
  return todos.filter(todo => !todo.completed).length;
};

export const getCompletedCount = (todos: Todo[]): number => {
  return todos.filter(todo => todo.completed).length;
}; 