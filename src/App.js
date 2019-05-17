import React from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="container">
      <h1 className="text-center">Todo List</h1>
      <Todo />
    </div>
  );
}

export default App;
