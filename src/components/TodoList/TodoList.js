import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkTodo, removeTodo } from '../../actions/todoActions';

import './index.css';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      {todos.map((t) => {
        return (
          <div className="cardList" key={t.id}>
            <div>
              <input
                type="checkbox"
                name="check"
                id="todo"
                checked={t.done ? true : false}
                onChange={() => dispatch(checkTodo(t.id))}
              />
              <label className="taskName" htmlFor="todo">
                {t.task}
              </label>
            </div>
            <button
              className="btnRemove"
              onClick={() => dispatch(removeTodo(t.id))}
            >
              X
            </button>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
