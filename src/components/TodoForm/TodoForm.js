import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../actions/todoActions';

import './index.css';

const TodoForm = () => {
  let input = '';

  const dispatch = useDispatch();

  const _onSubmit = (e) => {
    e.preventDefault();

    if (!input.value.trim()) return;

    dispatch(addTodo(input.value));
    input.value = '';
  };

  return (
    <div className="wrapper">
    <div className="cardInput">
      <form onSubmit={_onSubmit}>
        <input
          ref={(el) => (input = el)}
          placeholder="New task"
          type="text"
          maxLength="40"
          name="todo"
          id="formControl"
        />
        <button type="submit">Add</button>
      </form>
    </div>
    </div>
  );
};

export default TodoForm;
