import React from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';

import './app.css';

function App() {
  return (
    <div className="container">
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
