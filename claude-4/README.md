# To-Do List Web Application

A simple but complete To-Do List application built with React, TypeScript, and Tailwind CSS.

## Features

- ✅ Add new tasks
- ✏️ Edit existing tasks (double-click to edit)
- 🗑️ Delete tasks
- ✔️ Toggle task completion status
- 🔍 Filter tasks by All / Completed / Incomplete
- 💾 Persist task data using localStorage
- 🎨 Beautiful, modern UI with Tailwind CSS
- 📱 Responsive design

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Usage

- **Adding Tasks**: Type in the input field and press Enter or click the "Add" button
- **Editing Tasks**: Double-click on any task text to edit it inline
- **Completing Tasks**: Click the checkbox next to a task to mark it as complete
- **Deleting Tasks**: Click the trash icon to delete a task
- **Filtering**: Use the filter buttons (All, Active, Completed) to view different sets of tasks
- **Clear Completed**: When you have completed tasks, a "Clear Completed" button will appear

## Project Structure

```
src/
├── components/          # React components
│   ├── TodoForm.tsx    # Form for adding new todos
│   ├── TodoItem.tsx    # Individual todo item component
│   ├── TodoList.tsx    # List of todos
│   └── TodoFilter.tsx  # Filter buttons
├── hooks/              # Custom React hooks
│   └── useLocalStorage.ts
├── types/              # TypeScript type definitions
│   └── todo.ts
├── utils/              # Utility functions
│   └── todoUtils.ts
├── App.tsx             # Main application component
├── index.tsx           # Application entry point
└── index.css           # Global styles with Tailwind
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **localStorage** - Client-side data persistence

## License

This project is open source and available under the [MIT License](LICENSE). 