import React from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";

import "./app.css";

function App() {
  return (
    <div className="App">
    <div className="container">
      <Header />
      <TodoForm />
      <TodoList />
    </div>
    </div>
  );
}

export default App;
