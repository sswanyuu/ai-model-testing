import React from 'react';
import { FilterType } from '../types/todo';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  counts: {
    all: number;
    completed: number;
    incomplete: number;
  };
}

export const TodoFilter: React.FC<TodoFilterProps> = ({ currentFilter, onFilterChange, counts }) => {
  const filters: { key: FilterType; label: string; count: number }[] = [
    { key: 'all', label: 'All', count: counts.all },
    { key: 'incomplete', label: 'Active', count: counts.incomplete },
    { key: 'completed', label: 'Completed', count: counts.completed },
  ];

  return (
    <div className="flex justify-center mb-6">
      <div className="flex bg-gray-100 rounded-lg p-1">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={`px-4 py-2 rounded-md transition-colors font-medium text-sm ${
              currentFilter === filter.key
                ? 'bg-white text-primary-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {filter.label}
            <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
              {filter.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}; 