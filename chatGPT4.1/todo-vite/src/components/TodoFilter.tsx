import React from 'react';

type Filter = 'all' | 'completed' | 'incomplete';

type TodoFilterProps = {
  filter: Filter;
  setFilter: (filter: Filter) => void;
};

const FILTERS: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Completed', value: 'completed' },
  { label: 'Incomplete', value: 'incomplete' },
];

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="flex space-x-2 mb-4">
      {FILTERS.map(f => (
        <button
          key={f.value}
          className={`px-3 py-1 rounded ${filter === f.value ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setFilter(f.value)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter; 